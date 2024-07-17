import { html } from 'htm/preact';
import { SkillElm } from 'stories/resume/skills-list/index.js';

export const experiences = [
	{
		label: 'Current',
		content: html`
			<h3>Entity51 - My freelance business<br /><small><b>Owner</b>, October 2013 - present</small></h3>
			<p>
			My freelance business. Always running in the background when i'm not on a fulltime contract. The work consists mostly of consulting, web and mobile application development/maintenence.
			</p>
			<p>
				<${SkillElm}>Angular</${SkillElm}>
				<${SkillElm}>AngularJS</${SkillElm}>
				<${SkillElm}>React</${SkillElm}>
				<${SkillElm}>Javascript</${SkillElm}>
				<${SkillElm}>Typescript</${SkillElm}>
				<${SkillElm}>Facebook</${SkillElm}>
				<${SkillElm}>REST API</${SkillElm}>
				<${SkillElm}>Websocket</${SkillElm}>
				<${SkillElm}>Cordova</${SkillElm}>
				<${SkillElm}>PHP</${SkillElm}>
				<${SkillElm}>Unity3D</${SkillElm}>
				<${SkillElm}>C#</${SkillElm}>
				<${SkillElm}>iOS</${SkillElm}>
				<${SkillElm}>Android</${SkillElm}>
				<${SkillElm}>Website optimization</${SkillElm}>
				<${SkillElm}>SPA</${SkillElm}>
				<${SkillElm}>Redux</${SkillElm}>
				<${SkillElm}>UX</${SkillElm}>
				<${SkillElm}>MongoDB</${SkillElm}>
				<${SkillElm}>MySQL</${SkillElm}>
				<${SkillElm}>Docker</${SkillElm}>
				<${SkillElm}>XML</${SkillElm}>
				<${SkillElm}>XPath</${SkillElm}>
			</p>
		`
	},
	{
		label: '2023',
		content: html`
			<h3>Software Engineer<br /> <small><b>Arcanic</b>, November 2023 - April 2024</small></h3>
			<p>I was taking some courses at DTU, while doing that i worked part time as Arcanic on a UI for a new product using Blazor and .net</p>
			<p>
				<${SkillElm}>Blazor</${SkillElm}>
				<${SkillElm}>MudBlazor</${SkillElm}>
				<${SkillElm}>Javascript</${SkillElm}>
				<${SkillElm}>.net</${SkillElm}>
				<${SkillElm}>MSSQL</${SkillElm}>
				<${SkillElm}>Visual studio</${SkillElm}>
			</p>
		`
	},
	/*{
		label: '2022',
		content: html`
			<h3>ADHD mentor - Volunteer<br /> <small><b>ADHD-foreningen</b>, March 2022 - March 2024</small></h3>
			<p>As an ADHD mentor, I share my experience living with ADHD and mentor people diagnosed with ADHD on how to cope. With the goal of getting or maintaining a job or starting an education.</p>
			<p>
				<${SkillElm}>Mentoring</${SkillElm}>
			</p>
		`
	},*/
	{
		label: '2022',
		content: html`
			<h3>Web SDK lead<br /> <small><b>CellPoint Digital</b>, April 2022 - August 2022</small></h3>
			<p>I was hired to prototype their web payment orchestration client SDK meant to simplify implementation for vendors and later replace the existing client SDK.</p>
			<p>The work involved being part-time onsite with the clients team in Pune, India.</p>
			<p>
				<${SkillElm}>React</${SkillElm}>
				<${SkillElm}>UX</${SkillElm}>
				<${SkillElm}>Typescript</${SkillElm}>
				<${SkillElm}>Redux</${SkillElm}>
				<${SkillElm}>Kubernetes</${SkillElm}>
				<${SkillElm}>XML</${SkillElm}>
				<${SkillElm}>Architecture</${SkillElm}>
			</p>
		`
	},
	{
		label: '2021',
		//pageBreakBefore: true,
		content: html`
			<h3>
				Senior fullstack consultant  <br />
				<small>
					<b>DSV - Global Transport and Logistics</b>, October 2021 - April 2022
				</small>
			</h3>
			<p>I was responsible for implementation and UX of a GUI meant to handle the invoices our machine learning models could not handle confidently.</p>
			<p>This included creating an application that allowed users to visually generate XPath configurations for XML invoices.</p>
			<p>The GUI was made in a way were the Invoices could easily/quickly be verified manually in bulk.</p>
			<p>The corrected invoice data then fed back into the machine learning models.</p>
			<p>
				<${SkillElm}>React</${SkillElm}>
				<${SkillElm}>Typescript</${SkillElm}>
				<${SkillElm}>Redux</${SkillElm}>
				<${SkillElm}>C#</${SkillElm}>
				<${SkillElm}>UX</${SkillElm}>
				<${SkillElm}>Java</${SkillElm}>
				<${SkillElm}>Java Spring</${SkillElm}>
				<${SkillElm}>Kubernetes</${SkillElm}>
				<${SkillElm}>MongoDB</${SkillElm}>
				<${SkillElm}>MySQL</${SkillElm}>
				<${SkillElm}>XML</${SkillElm}>
				<${SkillElm}>XPath</${SkillElm}>
			</p>
		`
	},
	{
		label: '2021',
		content: html`
			<h3>Domain lead  <br /> <small><b>SimpleSite</b>, March 2021 - October 2021</small></h3>
			<p>I was one of two domain leads in charge of different parts of the frontend architecture.</p>
			<p>My responsibilities as domain lead was similar to that of a team lead, but with the scrum master related tasks removed so i could focus more one the architecture & performance.</p>
			<p>
				<${SkillElm}>Angular</${SkillElm}>
				<${SkillElm}>React</${SkillElm}>
				<${SkillElm}>Typescript</${SkillElm}>
				<${SkillElm}>Redux</${SkillElm}>
				<${SkillElm}>C#</${SkillElm}>
				<${SkillElm}>MSSQL</${SkillElm}>
				<${SkillElm}>Architecture</${SkillElm}>
				<${SkillElm}>Visual studio</${SkillElm}>
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
				<${SkillElm}>MSSQL</${SkillElm}>
				<${SkillElm}>Visual studio</${SkillElm}>
			</p>
		`
	},
	{
		label: '2019',
		content: html`
			<h3>Senior frontend developer <br /> <small><b>SimpleSite</b>, February 2019</small></h3>
			<p>
				I joined SimpleSite as a Senior developer as they needed someone with experience to improve & develop for their their Angular solution.
			</p>
			<p>
				<${SkillElm}>Angular</${SkillElm}>
				<${SkillElm}>React</${SkillElm}>
				<${SkillElm}>Typescript</${SkillElm}>
				<${SkillElm}>Redux</${SkillElm}>
				<${SkillElm}>C#</${SkillElm}>
				<${SkillElm}>MSSQL</${SkillElm}>
				<${SkillElm}>Visual studio</${SkillElm}>
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
				<${SkillElm}>Architecture</${SkillElm}>
				<${SkillElm}>Visual studio</${SkillElm}>
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
				<${SkillElm}>XML</${SkillElm}>
			</p>
		`
	},
	{
		label: '2013',
		//pageBreakBefore: true,
		content: html`
			<h3>Started freelance business<br /><small><b>Owner</b>, October 2013 - present</small></h3>
			<p>I started my freelance business.</p>
			<p>
				The work consists mostly of subcontracts to make social media SPA's, campaign and Cordova based mobile applications. More interestingly i helped a few startups get going technically and also coded a few mobile games in collaboration with independent game designers.
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
				<${SkillElm}>XML</${SkillElm}>
				<${SkillElm}>SOAP</${SkillElm}>
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
				<${SkillElm}>SOAP</${SkillElm}>
				<${SkillElm}>XML</${SkillElm}>
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
				<${SkillElm}>SOAP</${SkillElm}>
				<${SkillElm}>XML</${SkillElm}>
			</p>
		`
	},
];