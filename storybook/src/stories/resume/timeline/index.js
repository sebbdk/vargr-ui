import { html } from "htm/preact";
import styled from "styled-components";
import { Richtext, RichtextElm } from "stories/common/molecules/richtext";

export const TimeLineContentElm = styled.div`
  display: grid;
  grid-template-columns: auto auto;

	@media print {
		grid-template-columns: auto;
	}
`;

export const TimeLineItemElm = styled.div`
  position: relative;
  border: 2px solid #DDD;
  background-color: rgba(255, 255, 255, 0.05);
  margin-bottom: 1em;
  padding: 20px 20px 30px;
  box-sizing: border-box;
  flex-wrap: wrap;
  box-shadow: 0 0 15px rgb(0 0 0 / 10%);
  border-radius: 3px;

  @media print {
    box-shadow: none;
    padding: 0.5rem;
    border: 1px solid #DDD;
  }

  &:after {
    content: " ";
    display: block;
    bottom: 0;
    height: 1em;
    width: 0.25rem;
    background-color: #fff;
    position: absolute;
    bottom: calc(-1em - 2px);

    @media print {
      background-color: #ddd;
    }
  }

  &:last-of-type {
    &:after {
      display: none;
    }
  }

  h3 {
    margin-bottom: 0;
  }
`;

export const TimelineElm = styled.div`
  ${RichtextElm} h1 {
    margin-bottom: 1rem;
  }
`;

const EventLabelElm = styled.div`
  font-size: 1.25rem;
  line-height: 1.25rem;
  padding-right: 0.5em;
  opacity: 0.75;

  &:empty {
    padding: 0;
  }

	@media print {
		display: none;
	}
`;

/**
 * Primary UI component for user interaction
 */
export const Timeline = (props) => {
  const itemElms = props.items.map(e => html`
    <${EventLabelElm}>${e.label}</${EventLabelElm}>
    <${TimeLineItemElm}>
      <${Richtext}>${e.content}</${Richtext}>
    </${TimeLineItemElm}>
  `);

  return html`
    <${TimelineElm}>
      <${Richtext}><h1 className="--line">${props.title}</h1></${Richtext}>
      <${TimeLineContentElm}>
        ${itemElms}
      </${TimeLineContentElm}>
    </${TimelineElm}>
  `;
};