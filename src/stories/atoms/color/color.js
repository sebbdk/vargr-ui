/** @jsx h */
import { html, Component } from "htm/preact"
import { h } from 'preact';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Block = styled.div`
  width: 1rem;
  height: 1rem;
  ${({ color }) => {
    return `background-color: ${color || 'yellow'};`
  }}
`;

const BlockGroup = styled.div`
    width: 2rem;
    height: 2rem;
    border: 1px solid #999;
    display: flex;
    flex-wrap: wrap;
`;

/**
 * Primary UI component for user interaction
 */
export const ColorPreview = ({ primary, secondary, contrast, background}) => {
  return html`
  <${BlockGroup}>
    <${Block} color="red"></${Block}>
    <${Block} color="green"></${Block}>
    <${Block} color="blue"></${Block}>
    <${Block} color="yello"></${Block}>
  </${BlockGroup}>
  `;
};

ColorPreview.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  contrast: PropTypes.string,
  background: PropTypes.string
};

ColorPreview.defaultProps = {
  primary: 'red',
  secondary: 'blue',
  contrast: 'black',
  background: 'white'
};
