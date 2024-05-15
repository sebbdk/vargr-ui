import { createShader, createProgram } from './tools';

function getVGL(config = {}) {
	let gl = null;

	function initWebGL(canvas, contextType = config.contextType || 'webgl') {
		gl = canvas.getContext(contextType)

		// Prepare canvas
		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
		gl.clearColor(0, 0, 0, 0);
		gl.clear(gl.COLOR_BUFFER_BIT);
		return gl;
	}

	if (config.canvas) {
		initWebGL(config.canvas)
	}

	return {
		initWebGL,
		vertexShader: (string) => { return string; },
		fragmentShader: (string) => { return string; },
		loadProgram: () => {
			// think about scene graph and rendeting order
			// the code neds to auto sort scene objects etc.
			// look at how three.js does things maybe
			// it seems to be what people

			// https://webgl2fundamentals.org/webgl/lessons/webgl2-whats-new.html
			// https://webgl2fundamentals.org/webgl/lessons/webgl1-to-webgl2.html
			// https://stackoverflow.com/questions/9755158/is-it-more-performant-to-write-one-complicated-shader-or-several-different-shade

			// three 2d points
			var data = [
				0, 0,
				0, 0.5,
				0.5, 0,

				0.5, 0.5,
				0.1, 0.8,
				0.8, 0,
			];

			// Setup a "program" and buff some positions into it
			const program = createProgram(gl, vertexShaderRaw, fragmentShader2dRaw);
			gl.useProgram(program);

			var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
			var positionBuffer = gl.createBuffer();

			gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
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
			var count = 9;

			let deltaCount = 0;
			return {
				draw: () => {
					deltaCount += 0.1
					const delta = Math.sin(deltaCount);

					var positions = [
						0, 0 + delta,
						0, 0.5 + delta,
						0.5, 0 + delta,

						0, 0,
						0, 0.5,
						0.5, 0,

						0 + delta, 0,
						0 + delta, 0.5,
						0.5 + delta, 0,
					];

					gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

					gl.drawArrays(primitiveType, offset, count);
				},
			}
		}
	}
}

const vgl = getVGL();

const vertexShaderRaw = vgl.vertexShader`
	// an attribute will receive data from a buffer
	attribute vec4 a_position;

	// all shaders have a main function
	void main() {
		// gl_Position is a special variable a vertex shader
		// is responsible for setting
		gl_Position = a_position;
	}
`;

const fragmentShader2dRaw = vgl.fragmentShader`
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
	const gl = vgl.initWebGL(canvas);

	// Tell it to use our program (pair of shaders)
	const { draw } = vgl.loadProgram()

	draw();

	// use requestAnimationFrame
	// https://webglfundamentals.org/webgl/lessons/webgl-qna-recording-fps-in-webgl.html

	setInterval(() => {
		draw();
	}, 1000/30)
}