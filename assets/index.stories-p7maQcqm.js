import{u as $,m as d}from"./styled-components.browser.esm-LOVPg310.js";import{p as T}from"./compat.module-qtfPsa-n.js";import{B as n}from"./index-dEpx--bd.js";import"./preact.module-0A_VdQ5M.js";import"./index-zxhsOKIp.js";const f=$.div`
	display: flex;
`,l=$.canvas`
	margin: auto;
	width: 400px;
	height: 300px;
	background-color: tomato;
	border: 1px solid #EEE;
`;function c({demoMethod:r}){return T(()=>{r(document.getElementById("leDemo"))},[]),d`
		<${f}>
			<${l} id="leDemo">
				Please use a browser that supports "canvas"
			</${l}>
		</${f}>
	`}function h(r,e,t){var a=r.createShader(e);r.shaderSource(a,t),r.compileShader(a);var o=r.getShaderParameter(a,r.COMPILE_STATUS);if(o)return a;console.log(r.getShaderInfoLog(a)),r.deleteShader(a)}function w(r,e,t){var a=r.createProgram();r.attachShader(a,e),r.attachShader(a,t),r.linkProgram(a);var o=r.getProgramParameter(a,r.LINK_STATUS);if(o)return a;console.log(r.getProgramInfoLog(a)),r.deleteProgram(a)}const C=`
	// an attribute will receive data from a buffer
	attribute vec4 a_position;

	// all shaders have a main function
	void main() {
		// gl_Position is a special variable a vertex shader
		// is responsible for setting
		gl_Position = a_position;
	}
`,G=`
	// fragment shaders don't have a default precision so we need
	// to pick one. mediump is a good default
	precision mediump float;

	void main() {
		// gl_FragColor is a special variable a fragment shader
		// is responsible for setting
		gl_FragColor = vec4(0.2, 0.2, 0.75, 1); // return reddish-purple
	}
`;function P(r){const e=r.getContext("webgl"),t=h(e,e.VERTEX_SHADER,C),a=h(e,e.FRAGMENT_SHADER,G),o=w(e,t,a);var p=e.getAttribLocation(o,"a_position"),u=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,u);var R=[0,0,0,.5,.5,0,.5,.5,.1,.8,.8,0];e.bufferData(e.ARRAY_BUFFER,new Float32Array(R),e.STATIC_DRAW),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(o),e.enableVertexAttribArray(p),e.bindBuffer(e.ARRAY_BUFFER,u);var B=2,E=e.FLOAT,L=!1,D=0,m=0;e.vertexAttribPointer(p,B,E,L,D,m);var x=e.TRIANGLES,m=0,F=6;e.drawArrays(x,m,F)}const O={title:"WebGL/Demo",component:c,argTypes:{}},s=()=>d`
    <${n}>
        <${c} demoMethod=${P} />
    </${n}>
`,i=()=>d`
    <${n}>
        <${c} demoMethod=${P} />
    </${n}>
`;var v,g,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"() => html`\n    <${BasePage}>\n        <${WebGLDemo} demoMethod=${startWebGLDemo} />\n    </${BasePage}>\n`",...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,A,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:"() => html`\n    <${BasePage}>\n        <${WebGLDemo} demoMethod=${startWebGLDemo} />\n    </${BasePage}>\n`",...(_=(A=i.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const k=["demo01","demo02"];export{k as __namedExportsOrder,O as default,s as demo01,i as demo02};
