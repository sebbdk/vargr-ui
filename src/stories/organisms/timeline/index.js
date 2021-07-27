import { html } from "htm/preact";
import styled from "styled-components";

export const TimelineElm = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventElm = styled.div`
  border: 2px solid #DDD;
  background-color: rgba(255, 255, 255, 0.05);
  position: relative;
  margin-bottom: 1em;
  padding: 20px 20px 30px;
  box-sizing: border-box;
  flex-wrap: wrap;
  box-shadow: 0 0 15px rgb(0 0 0 / 10%);
  border-radius: 3px;

  &:last-of-type {
    &:after {
      display: none;
    }
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
  }
`;

const EventTitleElm = styled.div`
  font-weight: bold;
`;

const EventSubTitleElm = styled.div`
  font-weight: bold;
  font-size: 0.75em;
  margin: 0.5em 0;
  opacity: 0.8;
`;

const EventContentElm = styled.div`
  margin-top: 0.5em;
`;

/**
 * Primary UI component for user interaction
 */
export const Timeline = ({ items }) => {
  const itemElms = items.map(e => html`
    <${EventElm}>
      <${EventTitleElm}>${e.title}</${EventTitleElm}>
      <${EventSubTitleElm}>${e.subTitle}</${EventSubTitleElm}>
      <${EventContentElm}>${e.content}</${EventContentElm}>
    </${EventElm}>
  `);

  return html`
  <${TimelineElm}>
    ${itemElms}
  </${TimelineElm}>
  `;
};