float dode(vec3 p,vec3 a,vec3 b)
{
    vec4 vert = vec4(0,1,-1,.5+sqrt(1.25));
    vert /= length(vert.zw);

    float d = abs(dot(p,vert.xyw))-a.x;
    d = max(d,abs(dot(p,vert.ywx))-a.y);
    d = max(d,abs(dot(p,vert.wxy))-a.z);
    d = max(d,abs(dot(p,vert.xzw))-b.x);
    d = max(d,abs(dot(p,vert.zwx))-b.y);
    d = max(d,abs(dot(p,vert.wxz))-b.z);
    return d;
}
float dist(vec3 p)
{
    vec3 o = vec3(.6,1,.7);
    float d = (dode(p,o.zzz,o.zzz));
    d = max(d,-dode(p,o.yxx,o.xxx));
    d = max(d,-dode(p,o.xyx,o.xxx));
    d = max(d,-dode(p,o.xxy,o.xxx));
    d = max(d,-dode(p,o.xxx,o.yxx));
    d = max(d,-dode(p,o.xxx,o.xyx));
    d = max(d,-dode(p,o.xxx,o.xxy));
    return d;
}
vec4 march(vec3 p,vec3 r)
{
    vec4 m = vec4(p+r,1);
    for(int i = 0;i<77;i++)
    {
        float s = dist(m.xyz);
        m += vec4(r,1)*s;

        if ((s<.001) || (m.w>7.)) return m;
    }
    return m;
}
void mainImage(out vec4 color, in vec2 coord)
{
    float s = fract(iTime/4.);
    s = smoothstep(0.,.8,s);
    s *= s*(3.-2.*s);
    float a = s*3.14159+1.2;
    mat3 t = mat3(1,0,0,0,cos(a),-sin(a),0,sin(a),cos(a));
    vec2 f = vec2(0);

    for(float xx = -.5;xx<.5;xx+=.25)
    for(float yy = -.5;yy<.5;yy+=.25)
    {
        vec2 u = (coord+vec2(xx,yy)-.5*iResolution.xy)/iResolution.y;
        u *= (2.-.7*(s-.5)*(s-.5));
        vec4 m = march(vec3(u,-2.25+(s-.7)*(s-.3))*t,vec3(0,0,1)*t);
        f += vec2(smoothstep(4.4,2.,m.w/.7),1);
    }
    color = vec4(vec3(1,0,.25)*f.x/f.y,1);
}