import { createShader, createProgram } from './tools';

const vertextShaderSrc = `
	// an attribute will receive data from a buffer
	attribute vec4 a_position;

	// all shaders have a main function
	void main() {
		// gl_Position is a special variable a vertex shader
		// is responsible for setting
		gl_Position = a_position;
	}
`;

const fragmentShader2dSrc = `
	// fragment shaders don't have a default precision so we need
	// to pick one. mediump is a good default
	precision mediump float;

	void main() {
		// gl_FragColor is a special variable a fragment shader
		// is responsible for setting
		gl_FragColor = vec4(0.2, 0.2, 0.75, 1); // return reddish-purple
	}
`;

export function startWebGLDemo(canvas) {
	const gl = canvas.getContext('webgl');

	// Setup a "program" and buff some positions into it
	const vertextShader = createShader(gl, gl.VERTEX_SHADER, vertextShaderSrc)
	const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader2dSrc)

	const program = createProgram(gl, vertextShader, fragmentShader);

	var positionAttributeLocation = gl.getAttribLocation(program, "a_position");

	var positionBuffer = gl.createBuffer();

	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

	// three 2d points
	var positions = [
		0, 0,
		0, 0.5,
		0.5, 0,

		0.5, 0.5,
		0.1, 0.8,
		0.8, 0,
	];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

	// lets render some shit!

	// set canvas size to match css size
	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

	// Clear the canvas
	gl.clearColor(0, 0, 0, 0);
	gl.clear(gl.COLOR_BUFFER_BIT);

	// Tell it to use our program (pair of shaders)
	gl.useProgram(program);

	gl.enableVertexAttribArray(positionAttributeLocation);

	// Bind the position buffer.
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

	// Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
	var size = 2;          // 2 components per iteration
	var type = gl.FLOAT;   // the data is 32bit floats
	var normalize = false; // don't normalize the data
	var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
	var offset = 0;        // start at the beginning of the buffer
	gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

	var primitiveType = gl.TRIANGLES;
	var offset = 0;
	var count = 6;
	gl.drawArrays(primitiveType, offset, count);
}