import { html, Component } from "htm/preact"
import PropTypes from 'prop-types';
import styled from "styled-components"
import { Card } from "stories/molecules/card";

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

const GalleryContainer = styled.div`
  background-color: #999;
`;

const Title = styled.h2`
  margin: 0rem;
  padding: 1rem;
  padding-bottom: 0;
  font-size: 1.25em;
`;

export function ImagePage(props) {
  function openImage() {
    props.onPick && props.onPick(props.src)
  }

  const d = {
    compact:true,
    ...props
  }

  return html`<${ImgElm} hasPick=${props.onPick !== undefined} onClick=${props.onPick && openImage}>
    <${Card} ...${d} />
  </${ImgElm}>`;
}

export const Gallery = ({ title, onPick, images, ...props }) => {
  const imgElms = images.map((props, index) => {
    function onImagePick() {
      onPick(index, images)
    }

    return html`<${ImagePage} hasBorder=${false} onPick=${onPick && onImagePick} ...${props}></${ImagePage}>`
  });

  return html`<${GalleryContainer}>
    <${Title}>${title}</${Title}>
    <${ListView}>
      ${imgElms}
    </${ListView}>
  </${GalleryContainer}>`;
};

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  onPick: PropTypes.func,
  //images: PropTypes.arrayOf.string.isRequired,
};

Gallery.defaultProps = {
  title: 'UNDEFINED TITLE',
  images: [],
};
