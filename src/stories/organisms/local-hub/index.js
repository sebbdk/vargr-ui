import { html } from "htm/preact";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Card } from "stories/molecules/card";

// Most of the logo's are sources from: https://www.vectorlogo.zone/
import mongodbLogo from './icons/mongodb.svg';
import nextcloudLogo from './icons/nextcloud.svg';
import nginxLogo from './icons/nginx.svg';
import octoprintLogo from './icons/octoprint.png';
import parseLogo from './icons/parse.svg';
import portainerLogo from './icons/portainer.svg';
import storybookLogo from './icons/storybook.svg';

export const serviceList = [
  { name: 'Storybook', link: 'http://book.hopper.local', logo: storybookLogo },
  { name: 'MongoDB', link: 'http://mongo.hopper.local', logo: mongodbLogo },
  { name: 'NextCloud', link: 'http://next.hopper.local', logo: nextcloudLogo},
  { name: 'Parse', link: 'http://parse.hopper.local', logo: parseLogo },
  { name: 'Portainer', link: 'http://Portainer.hopper.local', logo: portainerLogo },
  { name: 'Nginx', link: 'http://hopper.local:81', logo: nginxLogo },
  { name: '3D printer', link: 'http://octo.local', logo: octoprintLogo }
];

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

export const LocalHub = ({ services = serviceList, ...props }) => {
  const imgElms = serviceList.map((item, index) => {
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

LocalHub.propTypes = {
  services: PropTypes.arrayOf.string,
};

LocalHub.defaultProps = {
  services: [],
};
