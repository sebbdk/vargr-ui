import { Richtext } from './index.js';
import { html } from 'htm/preact';
import { CenterPage } from '../../templates/centerpage/index.js';

export default {
  title: 'molecules/Richtext',
  component: Richtext,
  argTypes: {},
};

export const Primary = () => {
	return html`
		<${CenterPage}>
			<${Richtext}>
				<h1 className="--line">H1 Hello world with <i>--line</i></h1>
				<h2>H2 Hello world</h2>
				<h3>H3 Hello world</h3>
				<p>
					<b>Bold Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
					<b>Bold Lorem ipsum</b> dolor sit amet,
				</p>
				<ul>
					<li>Hello</li>
					<li>This</li>
					<li>Is</li>
					<li>A</li>
					<li>List</li>
					<ul>
						<li>Sub</li>
						<li>list</li>
					</ul>
				</ul>
				<p>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<a href="http://google.com" target="_blank">Link to google</a>
			</${Richtext}>
		</${CenterPage}>
	`;
}