import { SRLOG } from './log'

const PRECISIONS = ['lowp', 'mediump', 'highp']

const FS_MAIN_SHADER = `\nvoid main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`

const BASIC_FS =
    // Basic shadertoy shader
    `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`

const BASIC_VS = `
attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}
`

enum Uniforms {
    UNIFORM_TIME = 'iTime',
    UNIFORM_TIMEDELTA = 'iTimeDelta',
    UNIFORM_DATE = 'iDate',
    UNIFORM_FRAME = 'iFrame',
    UNIFORM_MOUSE = 'iMouse',
    UNIFORM_RESOLUTION = 'iResolution',
    // UNIFORM_CHANNEL = 'iChannel',
    // UNIFORM_CHANNEL_RESOLUTION = 'iChannelResolution',
    UNIFORM_DEVICEORIENTATION = 'iDeviceOrientation', // Uniforms not built-int in shadertoy
}

type Uniform = {
    type: string,
    value: number | Array<number>,
};

type Props = {
    fs: string,
    vs?: string,
    uniforms?: Array<Uniform>,
    clearColor?: Array<number>,
    precision: string | 'highp' | 'mediump' | 'lowp',
    style?: string,
    // eslint-disable-next-line no-undef
    contextAttributes: WebGLContextAttributes,
    lerp?: number,
    devicePixelRatio: number,
    canvas: HTMLCanvasElement
};


const defaultProps = {
    vs: BASIC_VS,
    precision: 'highp',
    devicePixelRatio: 1,
    contextAttributes: {},
}

type Shaders = { fs: string, vs: string };

function lerpVal(v0: number, v1: number, t: number) {
    return v0 * (1 - t) + v1 * t
}
function insertStringAtIndex(currentString: string, string: string, index: number) {
    return index > 0 ? currentString.substring(0, index) + string + currentString.substring(index, currentString.length) : string + currentString
}

export default class ShadertoyTransform {
    uniforms:{
        [k in string]: {
            type: string
            isNeeded: boolean
            value: number[]
        }
    }
    gl: WebGLRenderingContext | null = null;
    squareVerticesBuffer: WebGLBuffer | null = null;
    shaderProgram!: WebGLProgram | null;
    vertexPositionAttribute!: number;
    animFrameId?: number;
    canvas: HTMLCanvasElement;
    mousedown = false;
    // eslint-disable-next-line no-undef
    canvasPosition: ClientRect;
    timer = 0;
    lastMouseArr: Array<number> = [0, 0];
    lastTime = 0;

    props: Props

    constructor(props: Props) {

        this.props = props
        this.canvas = props.canvas
        this.canvasPosition = props.canvas.getBoundingClientRect()

        this.uniforms = {
            [Uniforms.UNIFORM_TIME]: {
                type: 'float',
                isNeeded: false,
                value: [0],
            },
            [Uniforms.UNIFORM_TIMEDELTA]: {
                type: 'float',
                isNeeded: false,
                value: [0],
            },
            [Uniforms.UNIFORM_DATE]: {
                type: 'vec4',
                isNeeded: false,
                value: [0, 0, 0, 0],
            },
            [Uniforms.UNIFORM_MOUSE]: {
                type: 'vec4',
                isNeeded: false,
                value: [0, 0, 0, 0],
            },
            [Uniforms.UNIFORM_RESOLUTION]: {
                type: 'vec2',
                isNeeded: false,
                value: [0, 0],
            },
            [Uniforms.UNIFORM_FRAME]: {
                type: 'int',
                isNeeded: false,
                value: [0],
            },
            [Uniforms.UNIFORM_DEVICEORIENTATION]: {
                type: 'vec4',
                isNeeded: false,
                value: [0, 0, 0, 0],
            }
        }
    }

    componentDidMount = () => {
        this.initWebGL()

        const { fs, vs, clearColor = [1, 1, 0, 1] } = this.props
        const { gl } = this

        if (!gl) return

        gl.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3])
        gl.clearDepth(1.0)
        gl.enable(gl.DEPTH_TEST)
        gl.depthFunc(gl.LEQUAL)
        gl.viewport(0, 0, this.canvas.width, this.canvas.height)

        this.canvas.height = this.canvas.clientHeight
        this.canvas.width = this.canvas.clientWidth

        this.initShaders(this.preProcessShaders(fs || BASIC_FS, vs || BASIC_VS))
        this.initBuffers()
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.drawScene()
        // this.addEventListeners()
        this.onResize()
    }

    componentWillUnmount(): void {
        const { gl } = this

        if (gl) {
            gl.getExtension('WEBGL_lose_context')?.loseContext()

            gl.useProgram(null)
            gl.deleteProgram(this.shaderProgram)

            this.shaderProgram = null
        }

        this.removeEventListeners()
        cancelAnimationFrame(this.animFrameId!)
    }

    initWebGL(): void {
        const { contextAttributes } = this.props
        this.gl = this.canvas.getContext('webgl', contextAttributes)
        this.gl?.getExtension('OES_standard_derivatives')
        this.gl?.getExtension('EXT_shader_texture_lod')
    }

    initBuffers(): void {
        const { gl } = this

        if (gl === null) return

        this.squareVerticesBuffer = gl.createBuffer()

        gl.bindBuffer(gl.ARRAY_BUFFER, this.squareVerticesBuffer)

        const vertices = [
            1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0, -1.0, 0.0,
        ]

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
    }

    addEventListeners(): void {
        const options = {
            passive: true,
        }

        if (this.uniforms.iMouse.isNeeded) {
            this.canvas.addEventListener('mousemove', this.mouseMove, options)
            this.canvas.addEventListener('mouseout', this.mouseUp, options)
            this.canvas.addEventListener('mouseup', this.mouseUp, options)
            this.canvas.addEventListener('mousedown', this.mouseDown, options)

            // this.canvas.addEventListener('touchmove', this.mouseMove, options)
            // this.canvas.addEventListener('touchend', this.mouseUp, options)
            // this.canvas.addEventListener('touchstart', this.mouseDown, options)
        }

        if (this.uniforms.iDeviceOrientation.isNeeded) {
            window.addEventListener(
                'deviceorientation',
                this.onDeviceOrientationChange,
                options
            )
        }

        window.addEventListener('resize', this.onResize, options)
    }

    removeEventListeners = () => {
        if (this.uniforms.iMouse.isNeeded) {
            this.canvas.removeEventListener('mousemove', this.mouseMove)
            this.canvas.removeEventListener('mouseout', this.mouseUp)
            this.canvas.removeEventListener('mouseup', this.mouseUp)
            this.canvas.removeEventListener('mousedown', this.mouseDown)

            // this.canvas.removeEventListener('touchmove', this.mouseMove)
            // this.canvas.removeEventListener('touchend', this.mouseUp)
            // this.canvas.removeEventListener('touchstart', this.mouseDown)
        }

        if (this.uniforms.iDeviceOrientation.isNeeded) {
            window.removeEventListener(
                'deviceorientation',
                this.onDeviceOrientationChange,
            )
        }

        window.removeEventListener('resize', this.onResize)
    };

    onDeviceOrientationChange = (evt: DeviceOrientationEvent) => {
        const { alpha, beta, gamma } = evt
        this.uniforms.iDeviceOrientation.value = [
            alpha || 0,
            beta || 0,
            gamma || 0,
            window.screen.orientation.angle,
        ]
    };

    mouseDown = (e: MouseEvent) => {
        const clientX = e.clientX // || e.changedTouches[0].clientX
        const clientY = e.clientY // || e.changedTouches[0].clientY

        const mouseX = clientX - this.canvasPosition.left - window.pageXOffset
        const mouseY =
            this.canvasPosition.height -
            clientY -
            this.canvasPosition.top -
            window.pageYOffset

        this.mousedown = true
        this.uniforms.iMouse.value[2] = mouseX
        this.uniforms.iMouse.value[3] = mouseY

        this.lastMouseArr[0] = mouseX
        this.lastMouseArr[1] = mouseY
    };

    mouseMove = (e: MouseEvent) => {
        this.canvasPosition = this.canvas.getBoundingClientRect()
        const { lerp = 1 } = this.props

        const clientX = e.clientX // || e.changedTouches[0].clientX
        const clientY = e.clientY // || e.changedTouches[0].clientY

        const mouseX = clientX - this.canvasPosition.left
        const mouseY = this.canvasPosition.height - clientY - this.canvasPosition.top

        if (lerp !== 1) {
            this.lastMouseArr[0] = mouseX
            this.lastMouseArr[1] = mouseY
        } else {
            this.uniforms.iMouse.value[0] = mouseX
            this.uniforms.iMouse.value[1] = mouseY
        }
    };

    mouseUp = () => {
        this.uniforms.iMouse.value[2] = 0
        this.uniforms.iMouse.value[3] = 0
    };

    onResize = () => {
        const { gl } = this
        const { devicePixelRatio = 1 } = this.props

        if (gl === null) return

        this.canvasPosition = this.canvas.getBoundingClientRect()

        const realToCSSPixels = devicePixelRatio // Force pixel ratio to be one to avoid expensive calculus on retina display

        const displayWidth = Math.floor(
            this.canvasPosition.width * realToCSSPixels
        )

        const displayHeight = Math.floor(
            this.canvasPosition.height * realToCSSPixels
        )

        gl.canvas.width = displayWidth
        gl.canvas.height = displayHeight

        if (this.uniforms.iResolution.isNeeded) {
            const rUniform = gl.getUniformLocation(
                this.shaderProgram!,
                Uniforms.UNIFORM_RESOLUTION
            )
            // $FlowFixMe
            gl.uniform2fv(rUniform, [gl.canvas.width, gl.canvas.height])
        }
    };

    drawScene = (timestamp: number) => {
        const gl = this.gl!
        const { lerp = 1 } = this.props

        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

        gl.bindBuffer(gl.ARRAY_BUFFER, this.squareVerticesBuffer)
        gl.vertexAttribPointer(this.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0)

        this.setUniforms(timestamp)

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

        if (this.uniforms.iMouse.isNeeded && lerp !== 1) {
            this.uniforms.iMouse.value[0] = lerpVal(
                this.uniforms.iMouse.value[0],
                this.lastMouseArr[0],
                lerp
            )
            this.uniforms.iMouse.value[1] = lerpVal(
                this.uniforms.iMouse.value[1],
                this.lastMouseArr[1],
                lerp
            )
        }

        this.animFrameId = requestAnimationFrame(this.drawScene)
    }

    createShader(type: number, shaderCodeAsText: string): WebGLShader {
        const gl = this.gl!

        const shader = gl.createShader(type)!

        gl.shaderSource(shader, shaderCodeAsText)
        gl.compileShader(shader)

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.warn(SRLOG('Error compiling the shader:'), shaderCodeAsText)
            const compilationLog = gl.getShaderInfoLog(shader)
            gl.deleteShader(shader)
            console.error(SRLOG(`Shader compiler log: ${compilationLog}`))
        }

        return shader
    }

    initShaders ({ fs, vs }: Shaders): void {
        const gl = this.gl!
        // console.log(fs, vs);
        const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, fs)
        const vertexShader = this.createShader(gl.VERTEX_SHADER, vs)

        this.shaderProgram = gl.createProgram()

        if (this.shaderProgram === null) return

        gl.attachShader(this.shaderProgram, vertexShader)
        gl.attachShader(this.shaderProgram, fragmentShader)
        gl.linkProgram(this.shaderProgram)

        if (!gl.getProgramParameter(this.shaderProgram, gl.LINK_STATUS)) {
            // $FlowFixMe
            console.error(
                SRLOG(
                    `Unable to initialize the shader program: ${gl.getProgramInfoLog(
                        this.shaderProgram
                    )}`
                )
            )
            return
        }

        gl.useProgram(this.shaderProgram)

        this.vertexPositionAttribute = gl.getAttribLocation(
            this.shaderProgram,
            'aVertexPosition'
        )
        gl.enableVertexAttribArray(this.vertexPositionAttribute)
    }

    preProcessShaders(fs: string, vs: string): { fs: string, vs: string } {
        const { precision, devicePixelRatio = 1 } = this.props

        const dprString = `#define DPR ${devicePixelRatio.toFixed(1)} \n`
        const isValidPrecision = PRECISIONS.includes(precision)
        const precisionString = `precision ${ isValidPrecision ? precision : PRECISIONS[1]} float; \n`
        if (!isValidPrecision)
            console.warn(
                SRLOG(`wrong precision type ${ precision }, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`)
            )

        let fsString = precisionString
            .concat(dprString)
            .concat(fs)
            .replace(/texture\(/g, 'texture2D(')

        const indexOfPrecisionString = fsString.lastIndexOf(precisionString)

        Object.keys(this.uniforms).forEach((uniform) => {
            if (!fs.includes(uniform)) return

            fsString = insertStringAtIndex( fsString,
                `uniform ${this.uniforms[uniform].type} ${uniform} ; \n`,
                indexOfPrecisionString + precisionString.length
            )
            this.uniforms[uniform].isNeeded = true
        })

        const isShadertoy = /mainImage/.test(fs)
        if (isShadertoy) fsString = fsString.concat(FS_MAIN_SHADER)

        return {
            fs: fsString,
            vs,
        }
    }

    setUniforms(timestamp: number): void {
        const gl = this.gl!

        if (!this.shaderProgram) return

        const delta = this.lastTime ? (timestamp - this.lastTime) / 1000 : 0
        this.lastTime = timestamp

        if (this.uniforms.iMouse.isNeeded) {
            const mouseUniform = gl.getUniformLocation(
                this.shaderProgram,
                Uniforms.UNIFORM_MOUSE
            )
            gl.uniform4fv(mouseUniform, this.uniforms.iMouse.value)
        }

        // if (
        //     this.uniforms.iChannelResolution &&
        //     this.uniforms.iChannelResolution.isNeeded
        // ) {
        //     const channelResUniform = gl.getUniformLocation(
        //         this.shaderProgram,
        //         Uniforms.UNIFORM_CHANNEL_RESOLUTION
        //     )
        //     gl.uniform3fv(channelResUniform, this.uniforms.iChannelResolution.value)
        // }

        if (this.uniforms.iDeviceOrientation.isNeeded) {
            const deviceOrientationUniform = gl.getUniformLocation(
                this.shaderProgram,
                Uniforms.UNIFORM_DEVICEORIENTATION
            )
            gl.uniform4fv(
                deviceOrientationUniform,
                this.uniforms.iDeviceOrientation.value
            )
        }

        if (this.uniforms.iTime.isNeeded) {
            const timeUniform = gl.getUniformLocation(
                this.shaderProgram,
                Uniforms.UNIFORM_TIME
            )

            gl.uniform1f(timeUniform, (this.timer += delta))
        }

        if (this.uniforms.iTimeDelta.isNeeded) {
            const timeDeltaUniform = gl.getUniformLocation(
                this.shaderProgram,
                Uniforms.UNIFORM_TIMEDELTA[0]
            )
            gl.uniform1f(timeDeltaUniform, delta)
        }

        if (this.uniforms.iDate.isNeeded) {
            const d = new Date()
            const month = d.getMonth() + 1
            const day = d.getDate()
            const year = d.getFullYear()
            const time =
                d.getHours() * 60 * 60 +
                d.getMinutes() * 60 +
                d.getSeconds() +
                d.getMilliseconds() * 0.001

            const dateUniform = gl.getUniformLocation(
                this.shaderProgram,
                Uniforms.UNIFORM_DATE
            )

            gl.uniform4fv(dateUniform, [year, month, day, time])
        }

        if (this.uniforms.iFrame.isNeeded) {
            const timeDeltaUniform = gl.getUniformLocation(
                this.shaderProgram,
                Uniforms.UNIFORM_FRAME[0]
            )
            gl.uniform1i(timeDeltaUniform, this.uniforms.iFrame.value[0]++)
        }
    }
}