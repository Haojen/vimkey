/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface WebGLTexture {
  _webglTexture: WebGLTexture
}

declare module '*.md'
declare module '*.frag'
declare module '*.vert'
