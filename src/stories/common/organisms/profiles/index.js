import { html, Component } from "htm/preact"
import PropTypes from 'prop-types';
import styled from "styled-components"
import { Card } from "stories/common/molecules/card";

const ImgElm = styled.div`
  width: calc(100% - 1rem);
  aspect-ratio: 595 / 842; // A4 paper aspect
  margin: 0.5rem;
  box-sizing: border-box;
  display:  flex;
  align-items: stretch;

  ${({ hasPick }) => {
      return hasPick && 'cursor: pointer;'
  }}

  @media only screen and (min-width: 375px) {
    width: calc(50% - 1rem);
  }

  @media only screen and (min-width: 768px) {
    width: calc(33.33% - 1rem);
  }

  @media only screen and (min-width: 1024px) {
    width: calc(20% - 1rem);
  }

  &:last-child {
    flex-grow: 0;
  }
`;

const ListView = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
`;

const ProfilesWrapper = styled.div`
`;

const InfoWrapper = styled.div`
  padding: 0 1rem;
`;

export function ImagePage(props) {
  function openImage() {
    props.onPick && props.onPick(props.src)
  }

  const d = {
    compact:true,
    wide: true,
    //flexDirection: 'column-reverse',
    ...props
  }

  return html`<${ImgElm} hasPick=${props.onPick !== undefined} onClick=${props.onPick && openImage}>
    <${Card} ...${d} />
  </${ImgElm}>`;
}

export const Profiles = ({ infoCard, onPick, cards, ...props }) => {
  const imgElms = cards.map((props, index) => {
    function onImagePick() {
      onPick(index, cards)
    }

    return html`<${ImagePage} hasBorder=${false} onPick=${onPick && onImagePick} ...${props}></${ImagePage}>`
  });

  return html`<${ProfilesWrapper}>
    <${InfoWrapper}>
      <${Card} ...${infoCard} hasBorder=${false} />
    </${InfoWrapper}>
    <${ListView}>
      ${imgElms}
    </${ListView}>
  </${ProfilesWrapper}>`;
};

Profiles.propTypes = {
  title: PropTypes.string.isRequired,
  onPick: PropTypes.func,
  //images: PropTypes.arrayOf.string.isRequired,
};

Profiles.defaultProps = {
  title: 'UNDEFINED TITLE',
  images: [],
};
