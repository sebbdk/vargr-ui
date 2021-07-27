import { Timeline } from './index';
import { html } from 'htm/preact';
import { BasePage } from 'stories/templates/basepage';

export default {
  title: 'Organisms/Timeline',
  component: Timeline,
  argTypes: {},
};

const Template = (args) => html`<${BasePage}><${Timeline} ...${args} /></${BasePage}>`;

export const primary = Template.bind({});
primary.args = {
  title: 'hello world!',
  items: [
    {
      label: '2019',
      content: html`
        <h3>Frontend Tech/Team-lead <br /> <small>Feb 2019 - Current</small></h3>
        <p>
          I joined SimpleSite in the middle of a growth spurt as a Senior developer, so i had the privilidge of helping to implement Scrum practices, training/mentoring junior/intermediate developers, designing & implementing deployment and automated testing strategies, and then ofc. upgrading performance, migrating and developing new features.
        </p>
      `
    },
    {
      content: html`
        <h3>Frontend Tech/Team-lead <br /></h3>
        <p>
          I joined SimpleSite in the middle of a growth spurt as a Senior developer, so i had the privilidge of helping to implement Scrum practices, training/mentoring junior/intermediate developers, designing & implementing deployment and automated testing strategies, and then ofc. upgrading performance, migrating and developing new features.
        </p>
      `
    },
    {
      label: '2017',
      content: html`
        <h3>Frontend Tech/Team-lead <br /> <small>Feb 2019 - Current</small></h3>
        <p>
          I joined SimpleSite in the middle of a growth spurt as a Senior developer, so i had the privilidge of helping to implement Scrum practices, training/mentoring junior/intermediate developers, designing & implementing deployment and automated testing strategies, and then ofc. upgrading performance, migrating and developing new features.
        </p>
      `
    }
  ]
};
