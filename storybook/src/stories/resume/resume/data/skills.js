import { html } from 'htm/preact';

export const skills = [
	{
		title: html`Languages <small>The human ones</small>`,
		items: ['English', 'Danish']
	},
	{
		title: html`Programming languages <small>Abbreviated</small>`,
		items: ['Javascript', 'Typescript', 'C#', 'Java', 'CSS', 'HTML', 'PHP']
	},
	{
		title: html`Tools & frameworks <small>Abbreviated</small>`,
		items: [ 'Git', 'NodeJS', 'Unity3D', 'MySQL', 'MongoDB', 'Webpack', 'Angular', 'React', 'Figma (and similar)'  ]
	},
	{
		title: html`Patterns, soft-skills, roles <small>Abbreviated</small>`,
		items: [ 'CI/TD', 'Unit testing', 'Project management', 'E2E testing', 'SEO', 'Backend development', 'Frontend development', 'Team-lead', 'object-oriented' ]
	}
];