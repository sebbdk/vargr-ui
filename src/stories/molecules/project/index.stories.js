import { Project } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/templates/basepage';

export default {
  title: 'molecules/project',
  component: Project,
  argTypes: {},
};


const images = [
	'http://sebbdk.github.io/Curriculum-Vitae/1.8887af35.jpg',
	'http://sebbdk.github.io/Curriculum-Vitae/2.14431877.jpg',
	'http://sebbdk.github.io/Curriculum-Vitae/3.437a0227.jpg',
	'http://sebbdk.github.io/Curriculum-Vitae/3.437a0227.jpg',
	'http://sebbdk.github.io/Curriculum-Vitae/3.437a0227.jpg',
	'http://sebbdk.github.io/Curriculum-Vitae/3.437a0227.jpg',
];



export const primary= () => html`
	<${BasePage}>
		<${Project} images=${images} tags=${['Load optimization', 'Sitecore']}>
			<h2 class="--line">Sofus & Månemaskinen</h2>
			As a consultant i refactored their build solution for simplicity and performance and helped implement their SPA to none SPA migration plan to improve load metrics,
			I also established code guidelines, as well as documented their frontend components and process.
		</${Project}>
	</${BasePage}>
`;

const iframe = html`<iframe width="1196" height="383" src="https://www.youtube.com/embed/bDZd9An-jAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
export const Youtube = () => html`
	<${BasePage}>
		<${Project} iframe=${iframe} tags=${['Load optimization', 'Sitecore']}>
			<h2 class="--line">Sofus & Månemaskinen</h2>
			As a consultant i refactored their build solution for simplicity and performance and helped implement their SPA to none SPA migration plan to improve load metrics,
			I also established code guidelines, as well as documented their frontend components and process.
		</${Project}>
	</${BasePage}>
`;
