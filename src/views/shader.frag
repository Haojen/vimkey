#define TMIN 0.1
#define TMAX 200.
#define RAYMARCH_TIME 128
#define PRECISION 0.05
#define AA 3
#define PI 3.14159

#define S(v,r) smoothstep( r, r+ 3./iResolution.y, v )

//========SDFunctions========
float sdSphere(vec3 p, vec3 o, float r){
    return length(p-o)-r;
}
//===============TRANSFORM=================
mat2 rotate(float a){
    return mat2(cos(a),sin(a),-sin(a),cos(a));
}
float smUni( float d1, float d2, float k ) {
    float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) - k*h*(1.0-h);
}

//===============RENDER===================
//Scene
float f(vec3 p){
    p.zx*=rotate(iTime);
    p.yz*=rotate(iTime);
    float k = .7;
    float d1 = sdSphere(p,vec3(sin(iTime*.5)),1.3);//center sphere
    float d2 = sdSphere(p,vec3(0,2.*sin(iTime),0.),.5);
    float d = smUni(d1,d2,k);

    float d3 = sdSphere(p,vec3(sin(iTime+5.),0,2.*sin(iTime+5.)),.9);
    d= smUni(d,d3,k);

    float d4 = sdSphere(p,vec3(-cos(iTime+.3),cos(iTime+.3),cos(iTime+.3)),.8);
    d= smUni(d,d4,k);

    float d5 = sdSphere(p,vec3(3.*cos(iTime+.7),0.,.5),.3);
    d= smUni(d,d5,k);

    return d;
}
float rayMarch(in vec3 ro, in vec3 rd) {
    float t = TMIN;
    for(int i = 0; i < RAYMARCH_TIME ; i++) {
        vec3 p = ro + t * rd;
        float d = f(p);
        t += d;
        if(d < PRECISION || t > TMAX)
        break;
    }
    return t;
}

// https://iquilezles.org/articles/normalsSDF
vec3 calcNormal(in vec3 p) {
    const float h = 0.0001;
    const vec2 k = vec2(1, -1);
    return normalize(k.xyy * f(p + k.xyy * h) +
    k.yyx * f(p + k.yyx * h) +
    k.yxy * f(p + k.yxy * h) +
    k.xxx * f(p + k.xxx * h));
}

mat3 setCamera(in vec3 camtar, in vec3 campos, in float camro){
    vec3 z = normalize(camtar-campos);
    vec3 cp = vec3(sin(camro),cos(camro),0.);
    vec3 x = normalize(cross(cp,z));
    vec3 y = cross(z,x);
    return mat3(x,y,z);
}
vec3 render(vec2 uv){
    vec3 lightPos = vec3(-5., 5.,-5);//light

    //SET Camera
    vec3 cam_tar = vec3(-1,3,2);//cam target
    vec3 cam_pos = cam_tar +vec3(-10,20,15);//cam position


    vec3 rd = vec3(uv,9.); //decide view width
    rd = normalize(setCamera(cam_tar,cam_pos,0.)*rd);//viewing frustum

    float t = rayMarch(cam_pos,rd);//raymarching

    vec3 color = vec3(0.067);//background
    if(t > TMAX) return color;

    vec3 p = cam_pos + t*rd;
    vec3 n = calcNormal(p);

    color = n*.5+.5;
    // fog
    color *= exp(-0.4);

    return color;
}
vec2 getuv(vec2 coord){
    return (2.*coord-iResolution.xy)/iResolution.y;
}
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (2.*fragCoord-iResolution.xy)/iResolution.y;
    vec3 color = vec3(0.);
    #if AA>1
    for(int m = 0; m < AA; m++) {
        for(int n = 0; n < AA; n++) {
            vec2 offset = 2. * (vec2(float(m), float(n)) / float(AA) - .5);
            vec2 uv = getuv(fragCoord + offset);
            #else
            uv = getuv(fragCoord);
            #endif
            color += render(uv);
            #if AA>1
        }
    }
    color /= float(AA*AA);
    #endif

    color = mix(color,vec3(1),0.);
    fragColor = vec4(color,1.0);
}
