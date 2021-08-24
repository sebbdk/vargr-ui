import { Overlay } from './index.js';
import { html } from 'htm/preact';
import { createRef } from 'react';
import { BasePage } from 'stories/common/templates/basepage';

export default {
  title: 'Common/Molecules/overlay',
  component: Overlay,
  argTypes: {},
};

const ref = createRef();
const Template = (args) => {
    const open = () => ref.current.show();
    const close = () => ref.current.hide();

    return html`
        <${BasePage}>
            <button onclick=${open}>Open overlay</button>
            <${Overlay} ...${args} ref=${ref}>
                Hello this is an overlay, press here to close again
                <button onClick=${close}>Close</button>
            </${Overlay}>
        </${BasePage}>
    `
}

export const primary= Template.bind({});
primary.args = {};