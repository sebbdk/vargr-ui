import { html } from "htm/preact";
import styled from "styled-components";
import { Richtext } from "../richtext";

const SkillsSectionElm = styled.div`
	display: flex;
	flex-wrap: wrap;

`;

export const SkillElm = styled.span`
	background-color: var(--main-bg-color);
    color: #fff;
    border-radius: 5px;
    text-align: center;
    font-size: 0.75em;
    margin-right: 0.5em;
    padding: 2px 0.5em;
    line-height: 1.5em;
	margin-bottom: 1em;
	display: inline-block;
`;

export const SkillsSection = ({ groups }) => {
	const groupElms = groups.map((group) => {
		const skills = group.items.map(i => html`<${SkillElm}>${i}</${SkillElm}>`)

		return html`
			<${Richtext}>
				<h3 className="--line">${group.title}</h3>
				<${SkillsSectionElm}>${skills}</${SkillsSectionElm}>
			</${Richtext}>
		`;
	})

	return html`
		${groupElms}
	`;
  };