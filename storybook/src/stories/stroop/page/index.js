import { html } from "htm/preact"
import styled from "styled-components";
import { StroopGame } from "../stroop-game";
import { BasePage } from 'stories/common/templates/basepage';

export function StroopGamePage({}) {

	return html`
		<div>
			<${StroopGame} />

			<h1>Sleep Deprivation Reaction Time Test (Stroop Test Online)</h1>

			<p>This is a reproduction of a test found at https://snoozeuniversity.com/reaction-time-test/</p>
			<p>
				A look at how it was previously can be seen in the web archive <a href="https://web.archive.org/web/20231207112733/https://snoozeuniversity.com/reaction-time-test/" taget="_blank">here</a>.
			</p>

			<p>There are many ways to measure sleep deprivation.</p>
			<p>One common way that researchers use is the Stroop Test (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5388755/" target="_blank" rel="noopener">1</a>). It’s a simple test where you see the names of colors, and have to identify <strong>not the name, but the color of the text.</strong></p>
			<p>For example, you might see the word “yellow” and have to answer “green”; the actual word doesn’t matter.</p>
			<p>I’ve created a simple online version below, just click the button to begin when you’re ready. It measures both answer accuracy and speed of response. There are 50 questions in the test, which should take roughly 1-2 minutes to finish.</p>
			<p>To answer each challenge, press the first letter of the color on your keyboard:</p>

			<ul>
				<li>“r” for red</li
				><li>“y” for yellow</li>
				<li>“b” for blue</li>
				<li>“g” for green</li>
			</ul>

		</div>
	`;
}