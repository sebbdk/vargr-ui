/** @jsx h */
import { html } from 'htm/preact';
import styled from "styled-components"


const styles = `
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  text-align: center;

  &.--primary {
    color: white;
    background-color: #1ea7fd;
  }

  &.--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }

  &.--small {
    font-size: 12px;
    padding: 10px 16px;
  }

  &.--medium {
    font-size: 14px;
    padding: 11px 20px;
  }

  &.--large {
    font-size: 16px;
    padding: 12px 24px;
  }
`;

const ButtonElm = styled.button`${styles}`;
const ButtonLinkElm = styled.a`${styles}`;

export const Button = ({ primary, backgroundColor, size = 'medium', label, ...props }) => {
  const mode = primary ? '--primary' : '--secondary';
  return html`
    <${ButtonElm} className=${[`--${size}`, mode].join(' ')} style=${backgroundColor && { backgroundColor }} ...${props}>
      ${label}
    </${ButtonElm}>
  `;
};

export const LinkButton = ({ primary, backgroundColor, size = 'medium', label, ...props }) => {
  const mode = primary ? '--primary' : '--secondary';
  return html`
    <${ButtonLinkElm} className=${[`--${size}`, mode].join(' ')} style=${backgroundColor && { backgroundColor }} ...${props}>
      ${label}
    </${ButtonLinkElm}>
  `;
};
