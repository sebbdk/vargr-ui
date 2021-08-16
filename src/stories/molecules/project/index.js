import { html } from "htm/preact";
import styled from "styled-components";
import { Richtext } from "../richtext";
import { SkillElm } from "../skills-list";

const ProjectElm = styled.div`
	position: relative;
    border: 2px solid #DDD;
    background-color: rgba(255,255,255,0.05);
    padding: 1rem;
    box-sizing: border-box;
    box-shadow: 0 0 15px rgb(0 0 0 / 10%);
    border-radius: 3px;
	margin-top: 1rem;
`;

const imageContainerElm = styled.div`
	margin: 0 -1rem;
	margin-bottom: -1rem;
	padding: 1rem;
	background-color: rgba(255, 255, 255, 0.25);
    display: flex;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
	box-shadow: inset 0px 0px 1rem rgb(0 0 0 / 50%);

	img {
		margin: 0 0.5rem;

		&:first-child {
			margin-left: 0;
		}

		&:last-child {
			margin-right: 0;
		}
	}
`;


const tagsContainerElm = styled.div`
	margin-top: 0.5rem;
`;

export const Project = ({ children, images, tags }) => {
	let imageContainer = '';
	if (images.length > 0) {
		const imageElms = images.map(i => html`<img src=${i} />`);

		imageContainer = html`
			<${imageContainerElm}>
				${imageElms}
			</${imageContainerElm}>
		`;
	}

	let tagsContainer = '';
	if (tags.length > 0) {
		const tagElms = tags.map(i => html`<${SkillElm}>${i}</${SkillElm}>`);

		tagsContainer = html`
			<${tagsContainerElm}>
				${tagElms}
			</${tagsContainerElm}>
		`;
	}

	return html`
		<${ProjectElm}>
			<${Richtext}>
				${children}
				${tagsContainer}
			</${Richtext}>
			<div>${imageContainer}</div>
		</${ProjectElm}>
	`;
};
