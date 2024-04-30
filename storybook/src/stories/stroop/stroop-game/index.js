import { html } from "htm/preact"
import { useState } from 'preact/hooks';
import styled from "styled-components";

const LayoutElm = styled.div`
	align-items: center;
    background-color: #000;
    color: blue;
    display: flex;
    font-size: 4rem;
    justify-content: center;
	height: 100vh;

	&:active, &:focus {
		outline: none;
		border: none;
	}
`;

const StartBtn = styled.div`
	background-color: #15bb13;
	border-radius: .5rem;
	color: #fff;
	cursor: pointer;
	padding: 2rem;
`;

function randChoice(arr) {
	return arr[Math.floor(Math.random() * arr.length)]
  }

export function StroopGame({}) {
	const [currentColor, setColor] = useState('green');
	const [currentWord, setWord] = useState('blue');
	const [currentErrorcount, setErrorcount] = useState(0);
	const [countdown, setCountdown] = useState(-2);
	const [startTime, setStartTime] = useState(0);
	const wordCount = 50;

	const colorCodes = {
		blue: "#0095ff",
		red: "red",
		yellow: "yellow",
		green: "#3bca3b",
		white: "#fff"
	}

	const handleKeyDown = (event) => {
		if(countdown < 0 || !['r', 'g', 'b', 'y'].includes(event.key)) {
			return
		}

		if(startTime == 0) {
			setStartTime(window.performance.now())
		}

		const colors = ['red', 'green', 'blue', 'yellow'];

		if (event.key == 'r') {
			if(currentColor != 'red'){
				setErrorcount(currentErrorcount + 1)
			}
		}

		if (event.key == 'g') {
			if(currentColor != 'green'){
				setErrorcount(currentErrorcount + 1)
			}
		}
		if (event.key == 'b') {
			if(currentColor != 'blue'){
				setErrorcount(currentErrorcount + 1)
			}
		}
		if (event.key == 'y') {
			if(currentColor != 'yellow'){
				setErrorcount(currentErrorcount + 1)
			}
		}

		setCountdown(countdown - 1)
		setWord(randChoice(colors.filter((word) => word !== currentWord)))
		setColor(randChoice(colors.filter((color) => color !== currentColor)))

		// if we are done
		if (countdown - 1 == -1) {
			console.log(currentErrorcount)
			const errorPct = Math.floor((wordCount/(wordCount+currentErrorcount))* 100)
			const stopTime = window.performance.now()

			const deltaTime = stopTime - startTime;
			const avrgReactionTime = Math.round(deltaTime / wordCount);

			const daWord = html`
				<div>
					<div>Done: ${errorPct}% accuracy</div>
					<div>Average reaction time: ${avrgReactionTime}ms</div>
				</div<>
			`;

			setWord(daWord)
			setColor('white')
			return
		}
	};

	function start() {
		setCountdown(wordCount)
	}

	const startBtn = html`<${StartBtn} onClick=${start}>Click to begin</${StartBtn}>`;
	const content = countdown == -2 ? startBtn : currentWord;

	return html`
		<${LayoutElm}
			tabIndex="0"
			onKeyDown=${handleKeyDown}
			style="color: ${colorCodes[currentColor]};">
			${content}
		</${LayoutElm}>
	`;
}