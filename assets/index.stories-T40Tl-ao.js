import{u as L,m as f}from"./styled-components.browser.esm-LOVPg310.js";import{p as C}from"./compat.module-qtfPsa-n.js";import{B as c}from"./index-Wa5dPq5a.js";import"./preact.module-0A_VdQ5M.js";import"./index-g-2SN6mO.js";const h=L.div`
	display: flex;
`,g=L.canvas`
	margin: auto;
	width: 400px;
	height: 300px;
	background-color: tomato;
	border: 1px solid #EEE;
`;function l({demoMethod:r}){return C(()=>{r(document.getElementById("leDemo"))},[]),f`
		<${h}>
			<${g} id="leDemo">
				Please use a browser that supports "canvas"
			</${g}>
		</${h}>
	`}function b(r,e,n){var a=r.createShader(e);r.shaderSource(a,n),r.compileShader(a);var o=r.getShaderParameter(a,r.COMPILE_STATUS);if(o)return a;console.log(r.getShaderInfoLog(a)),r.deleteShader(a)}function W(r,e,n){const a=b(r,r.VERTEX_SHADER,e),o=b(r,r.FRAGMENT_SHADER,n);var t=r.createProgram();r.attachShader(t,a),r.attachShader(t,o),r.linkProgram(t);var i=r.getProgramParameter(t,r.LINK_STATUS);if(i)return t;console.log(r.getProgramInfoLog(t)),r.deleteProgram(t)}function y(r={}){let e=null;function n(a,o=r.contextType||"webgl"){return e=a.getContext(o),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e}return r.canvas&&n(r.canvas),{initWebGL:n,vertexShader:a=>a,fragmentShader:a=>a,loadProgram:()=>{var a=[0,0,0,.5,.5,0,.5,.5,.1,.8,.8,0];const o=W(e,I,M);e.useProgram(o);var t=e.getAttribLocation(o,"a_position"),i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array(a),e.STATIC_DRAW),e.enableVertexAttribArray(t),e.bindBuffer(e.ARRAY_BUFFER,i);var D=2,E=e.FLOAT,x=!1,F=0,p=0;e.vertexAttribPointer(t,D,E,x,F,p);var T=e.TRIANGLES,p=0,w=9;let v=0;return{draw:()=>{v+=.1;const s=Math.sin(v);var G=[0,0+s,0,.5+s,.5,0+s,0,0,0,.5,.5,0,0+s,0,0+s,.5,.5+s,0];e.bufferData(e.ARRAY_BUFFER,new Float32Array(G),e.STATIC_DRAW),e.drawArrays(T,p,w)}}}}}const u=y(),I=u.vertexShader`
	// an attribute will receive data from a buffer
	attribute vec4 a_position;

	// all shaders have a main function
	void main() {
		// gl_Position is a special variable a vertex shader
		// is responsible for setting
		gl_Position = a_position;
	}
`,M=u.fragmentShader`
	// fragment shaders don't have a default precision so we need
	// to pick one. mediump is a good default
	precision mediump float;

	void main() {
		// gl_FragColor is a special variable a fragment shader
		// is responsible for setting
		gl_FragColor = vec4(0.2, 0.2, 0.75, 1); // return reddish-purple
	}
`;function B(r){u.initWebGL(r);const{draw:e}=u.loadProgram();e(),setInterval(()=>{e()},1e3/30)}const V={title:"WebGL/Demo",component:l,argTypes:{}},d=()=>f`
    <${c}>
        <${l} demoMethod=${B} />
    </${c}>
`,m=()=>f`
    <${c}>
        <${l} demoMethod=${B} />
    </${c}>
`;var S,A,R;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:"() => html`\n    <${BasePage}>\n        <${WebGLDemo} demoMethod=${startWebGLDemo} />\n    </${BasePage}>\n`",...(R=(A=d.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var _,P,$;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:"() => html`\n    <${BasePage}>\n        <${WebGLDemo} demoMethod=${startWebGLDemo} />\n    </${BasePage}>\n`",...($=(P=m.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};const z=["demo01","demo02"];export{z as __namedExportsOrder,V as default,d as demo01,m as demo02};
