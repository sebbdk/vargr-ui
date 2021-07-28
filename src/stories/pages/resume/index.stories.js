import { ResumePage } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/templates/basepage';
import { SkillElm } from '../../molecules/skills-list/index.js';

export default {
  title: 'Pages/Resume',
  component: ResumePage,
  argTypes: {},
};

const Template = (args) => html`
	<${BasePage}>
		<${ResumePage} ...${args}></${ResumePage}>
	</${BasePage}>
`;

export const primary= Template.bind({});
primary.args = {
	profile: html`
		<img className="--framed" src="https://sebbdk.github.io/Curriculum-Vitae/profile_img.60f577df.png" />
		<br />
		<br />
		<h3 className="--line">Contact info & links</h3>
		<p>
			E-mail: <b>sebb@sebb.dk</b><br />
			Tlf: <b>+45 28491314</b><br />
			<br />
			<a target="_blank" href="https://www.linkedin.com/in/sebbdk/">LinkedIn</a><br />
			<a target="_blank" href="https://github.com/sebbdk/">Github</a>
		</p>
		<br />
	`,
	introduction: html`
		<h1 className="--line">
			Sebastian Vargr <small>Developing' Developer</small>
		</h1>
		<p>
			My name is Sebastian Vargr, web and application developer from Copenhagen, Denmark.
		</p>

		<p>
			I do full-stack web development with a focus on the frontend of the stack, to enable users to do "the thing".
		</p>
		<p>
			I find pleasure in doing this together with a team, mentoring, teaching and rallying people when needed,
			or doing the deep dives into solutions to setup & plan the frameworks for other people to work around.
		</p>

		<p>I am driven by the pride i get from making maintainable systems that succeed in their business case, and user stories.</p>

		<p>In my spare time, i enjoy hobby engineering, playing really badly on my guitar, and petting my adorable cats. :)</p>
	`,
	experienceTitle: 'My History',
	experiences: [
		{
			label: '2021',
			content: html`
				<h3>Domain lead  <br /> <small><b>SimpleSite</b>, March 2021 - present</small></h3>
				<p>I was one of two domain leads in charge of different parts of the frontend architecture.</p>
				<p>My responsibilities as domain lead was similar to that of a team lead, but with the scrum master related tasks removed so i could focus more one the architecture & performance.</p>
				<p>
					<${SkillElm}>Angular</${SkillElm}>
					<${SkillElm}>React</${SkillElm}>
					<${SkillElm}>Typescript</${SkillElm}>
					<${SkillElm}>Redux</${SkillElm}>
					<${SkillElm}>C#</${SkillElm}>
				</p>
			`
		},
		{
			label: '2020',
			content: html`
				<h3>Team lead <br /> <small><b>SimpleSite</b>, April 2019</small></h3>

				<p>
					There was a demand for a team lead i stepped up.<br />
					As a Team lead for one of the frontend teams and the most senior frontend developer, my responsibilities included:
				</p>
				<ul>
					<li>Mentoring & training developers</li>
					<li>Teaching & implementing newer scrum practices</li>
					<li>Planning the frontend architecture</li>
					<li>Planning & translating specifications into epics & stories for the team</li>
					<li>Rallying the team when needed to avoid crunch</li>
					<li>Planning knowledge sharing sessions & product demonstrations</li>
					<li>Implementing new features as a developer</li>
				</ul>

				<p>Apart from this i also orchestrated a new release and testing schedule which cut back on bugs in production significantly.</p>

				<p>
					<${SkillElm}>Angular</${SkillElm}>
					<${SkillElm}>React</${SkillElm}>
					<${SkillElm}>Typescript</${SkillElm}>
					<${SkillElm}>Redux</${SkillElm}>
					<${SkillElm}>C#</${SkillElm}>
				</p>
			`
		},
		{
			label: '2019',
			content: html`
				<h3>Senior frontend developer <br /> <small><b>SimpleSite</b>, February 2019</small></h3>
				<p>
					I joined SimpleSite in the middle of as a Senior developer as they needed someone with experience to improve & develop for their their Angular solution.
				</p>
				<p>
					<${SkillElm}>Angular</${SkillElm}>
					<${SkillElm}>React</${SkillElm}>
					<${SkillElm}>Typescript</${SkillElm}>
					<${SkillElm}>Redux</${SkillElm}>
					<${SkillElm}>C#</${SkillElm}>
				</p>
			`
		},
		{
			label: '2018',
			content: html`
				<h3>Senior frontend consultant <br /> <small><b>Saxo Bank</b>, January 2018 - December 2018</small></h3>
				<p>
					I refactored their build solution for simplicity and performance and helped migrate their old site from a bloated SPA solution to none SPA to improve load metrics, established code guidelines, as well as documented their frontend library.
				</p>
				<p>
					<${SkillElm}>AngularJS</${SkillElm}>
					<${SkillElm}>Javascript</${SkillElm}>
					<${SkillElm}>C#</${SkillElm}>
					<${SkillElm}>Sitecore</${SkillElm}>
				</p>
			`
		},
		{
			label: '2016',
			content: html`
				<h3>Senior frontend consultant <br /> <small><b>Nordea</b>, July 2016 - December 2018</small></h3>
				<p>Refactored their build system and established basic coding standards to enable their rather sizable team working on their internal AngularJS based pension management tools.</p>
				<p>Also worked on the first version of their Angular based Nora investment tool solution.</p>

				<p>
					<${SkillElm}>Angular</${SkillElm}>
					<${SkillElm}>React</${SkillElm}>
					<${SkillElm}>Redux</${SkillElm}>
					<${SkillElm}>Java</${SkillElm}>
					<${SkillElm}>Springboot</${SkillElm}>
				</p>
			`
		},
		{
			label: '2013',
			content: html`
				<h3>Business owner<br /><small><b>Owner</b>, October 2013 - present</small></h3>
				<p>
					Work consists mostly of subcontracts to make social media SPA's, campaign and Cordova based mobile applications. More interestingly i helped a few startups get going technically and also coded a few mobile games in collaboration with independent game designers.
				</p>
				<p>
					<${SkillElm}>AngularJS</${SkillElm}>
					<${SkillElm}>Javascript</${SkillElm}>
					<${SkillElm}>Facebook</${SkillElm}>
					<${SkillElm}>Cordova</${SkillElm}>
					<${SkillElm}>PHP</${SkillElm}>
					<${SkillElm}>Unity3D</${SkillElm}>
					<${SkillElm}>C#</${SkillElm}>
					<${SkillElm}>iOS</${SkillElm}>
					<${SkillElm}>Android</${SkillElm}>
				</p>
			`
		},
		{
			label: '2009',
			content: html`
				<h3>Developer <br /> <small><b>Nodes</b>, December 2009 - October 2013</small></h3>
				<p>Worked as a developer pumping out Facebook applications, in the ~4 years i was there, i was involved in more than 250 applications and pages or varying size.</p>
				<p>Probably the most varied place i have ever worked, one day i would be making a tool for people to record them self as two highpitched german nuts, complete with with facial tracking and southpark like animated mouths, and the next i would be placing a few million footballs in virtual space for an augmented reality application. Also got to make obscure flash games, applications where people could make their own sausage face designs etc etc.</p>
				<p>And most of it in a browser setting.</p>
				<p>
					<${SkillElm}>AngularJS</${SkillElm}>
					<${SkillElm}>Javascript</${SkillElm}>
					<${SkillElm}>Facebook</${SkillElm}>
					<${SkillElm}>PHP</${SkillElm}>
					<${SkillElm}>CakePHP</${SkillElm}>
					<${SkillElm}>Flash</${SkillElm}>
					<${SkillElm}>Actionscript</${SkillElm}>
				</p>
			`
		},
		{
			label: '2007',
			content: html`
				<h3>Developer <br /> <small>Decaro</small></h3>
				<p>My first job as a web-developer, made Joomla based websites and Adobe Flex based flash applications.</p>
				<p>
					<${SkillElm}>Javascript</${SkillElm}>
					<${SkillElm}>PHP</${SkillElm}>
					<${SkillElm}>Joomla</${SkillElm}>
					<${SkillElm}>Flash</${SkillElm}>
					<${SkillElm}>Actionscript</${SkillElm}>
				</p>
			`
		},
		{
			label: '2006',
			content: html`
				<h3>Webintegrator <br /> <small>Roskilde technical school</small></h3>
				<p>Studied generic web development, not limited to but including coding, UI design, and project management.</p>
			`
		},



	],
	skills: [
		{
			title: html`Languages <small>The human ones</small>`,
			items: ['English', 'Danish']
		},
		{
			title: html`Programming languages <small>Abriviated</small>`,
			items: ['Javascript', 'Typescript', 'C#', 'Java', 'CSS', 'HTML']
		},
		{
			title: html`Tools & framworks <small>Abriviated</small>`,
			items: [ 'Git', 'NodeJS', 'Unity3D', 'MySQL', 'MongoDB', 'Webpack', 'Angular', 'React' ]
		},
		{
			title: html`Patterns, softskills, roles <small>Abriviated</small>`,
			items: [ 'CI/TD', 'Unit testing', 'project management', 'E2E testing', 'SEO', 'Backend developement', 'Frontend developement', 'Teamlead' ]
		}
	]
};




