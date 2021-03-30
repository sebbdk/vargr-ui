import { html, Component } from "htm/preact"
import PropTypes from 'prop-types';
import styled from "styled-components"

const ImgElm = styled.img`
  width: calc(100% - 1rem);
  max-height: 200px;
  object-fit: contain;
  background-color: #333;
  margin: 0.5rem;
  box-sizing: border-box;
  user-select: none;
  
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

export function ImagePage({ src, onPick }) {
  function openImage() {
    onPick && onPick(src)
  }

  return html`<${ImgElm} hasPick="${ onPick !== undefined }" onClick="${openImage}" src="${src}" />`;
}

export const Gallery = ({ title, onPick, images, ...props }) => {
  const imgElms = images.map((src, index) => {
    function onImagePick() {
      onPick(index, images)
    }

    return html`<${ImagePage} onPick=${onPick && onImagePick} src="${src}"></${ImagePage}>`
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
