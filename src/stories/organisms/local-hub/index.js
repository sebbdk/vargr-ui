import { html } from "htm/preact"
import PropTypes from 'prop-types';
import styled from "styled-components"

export const serviceList = [
  { name: 'Storybook', link: 'http://book.hopper.local' },
  { name: 'MongoDB', link: 'http://mongo.hopper.local' },
  { name: 'NextCloud', link: 'http://next.hopper.local' },
  { name: 'Parse', link: 'http://parse.hopper.local' },
  { name: 'Portainer', link: 'http://Portainer.hopper.local' },
  { name: 'Nginx', link: 'http://hopper.local:81' },
  { name: '3D printer', link: 'http://octo.local' }
];

const ListItem = styled.a`
  border: 0.25em;
  padding: 1rem;
  display: block;
  background-color: #AAA;
  margin: 0.5rem;
  color: #333;
  text-decoration: none;
  font-family: Arial;
  font-weight: bold;
  border-radius: 0.2em;

  &:hover {
    background-color: #999;
  } 
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0.5rem;
`;

const MainWrapper = styled.div`
  display: block;
  background-color: #EEE;
  border: 0.2em solid #BBB;
  border-radius: 0.2em;
  min-width: 50%;
  max-width: 600px;
  width: calc(100vw - 4rem);
  margin: auto;
`;

export const LocalHub = ({ services = serviceList, ...props }) => {
  const imgElms = serviceList.map((item, index) => {
    return html`<${ListItem} href=${item.link} target="_blank" >${item.name}</${ListItem}>`
  });

  return html`<${MainWrapper}>
    <${List}>
      ${imgElms}
    </${List}>
  </${MainWrapper}>`;
};

LocalHub.propTypes = {
  services: PropTypes.arrayOf.string,
};

LocalHub.defaultProps = {
  services: [],
};
