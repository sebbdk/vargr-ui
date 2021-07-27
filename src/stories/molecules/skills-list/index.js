import { html } from "htm/preact";
import styled from "styled-components";

const SkillsElm = styled.div`
`;

const SkillsSectionElm = styled.div`
	display: flex;
	flex-wrap: wrap;

`;

const SkillsSectionHeaderElm = styled.h3`
	border-bottom: 1px solid #333;
	margin-top: 0;
	margin-bottom: 0.25em;
	font-size: 1em;
	width: 100%;
	flex-shrink: 0;
`;

const SkillElm = styled.span`
	background-color: var(--link-color);
    color: #fff;
    display: block;
    border-radius: 5px;
    text-align: center;
    font-size: 0.75em;
    margin-right: 0.5em;
    padding: 2px 0.5em;
    line-height: 1.5em;
	margin-bottom: 1em;
`;

export const SkillsSection = ({ groups }) => {
	const groupElms = groups.map((group) => {
		const skills = group.items.map(i => html`<${SkillElm}>${i}</${SkillElm}>`)

		return html`
			<${SkillsSectionElm}>
				<${SkillsSectionHeaderElm}>${group.title}</${SkillsSectionHeaderElm}>
				${skills}
			</${SkillsSectionElm}>
		`;
	})

	return html`
		<${SkillsElm}>
			${groupElms}
		</${SkillsElm}>
	`;
  };