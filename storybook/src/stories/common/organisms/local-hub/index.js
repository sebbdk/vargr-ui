import { html } from "htm/preact";
import styled from "styled-components";
import { Card } from "stories/common/molecules/card";

const ListItem = styled.a`
  margin: 0.5rem;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0.5rem;
`;

const MainWrapper = styled.div`
  display: block;

  border-radius: 0.2em;
  min-width: 50%;
  max-width: 600px;
  width: calc(100vw - 4rem);
  margin: auto;
`;

export const LocalHub = ({ services, ...props }) => {
  const imgElms = services.map((item, index) => {
    const props = {
      primaryText: item.name,
      icon: item.logo,
      link: item.link,
      hasBorder: false
    };

    return html`<${ListItem}><${Card} ...${props} /></${ListItem}>`;
  });

  return html`<${MainWrapper}>
    <${List}>
      ${imgElms}
    </${List}>
  </${MainWrapper}>`;
};