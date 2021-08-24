import { ResumePage } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/common/templates/basepage';
import { SkillElm } from '../skills-list/index.js';

export default {
  title: 'pages/resume',
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
		<div>
			<img className="--framed" src="https://sebbdk.github.io/Curriculum-Vitae/profile_img.60f577df.png" />
		</div>
		<div>
			<h3 className="--line">Sebastian Vargr</h3>
			<p>
				E-mail: <b>sebb@sebb.dk</b><br />
				Tlf: <b>+45 28491314</b><br />
				Location: <b>Copenhagen</b><br />
				<br />
				<a target="_blank" href="https://www.linkedin.com/in/sebbdk/">LinkedIn</a><br />
				<a target="_blank" href="https://github.com/sebbdk/">Github</a>
				<br />
				<br />
			</p>
		</div>
	`,
	introduction: html`
		<h1 className="--line">
			Sebastian Vargr <small>Developing' Developer</small>
		</h1>
		<p>
			My name is Sebastian Vargr, web and application developer from Copenhagen, Denmark.
		</p>

		<p>I am a full stack developer with a nose for business value. I bring value by teaching, mentoring, organizing developers, by solving problems in code, or creating by new features. </p>

		<p>I am driven not only by my passion for all things code, but also by seeing my employer succeed as i enjoy taking ownership of the parts that i am responsible for. Because of this, when appropriate, i am vocal when i see issues, and proactive about solving & optimizing both processes and code.</p>

		<p>In my sparetime i take care of my lazy cats, work on hobby electronics like my home-build CNC cutter & 3D printer and then some occasional gaming.</p>
	`,
	experienceTitle: 'History',
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
					I joined SimpleSite as a Senior developer as they needed someone with experience to improve & develop for their their Angular solution.
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
	],
	projects: [
		{
			description: html`
				<h2 class="--line">Saxobank Website</h2>
				As a consultant i refactored their build solution for simplicity and performance and helped implement their SPA to none SPA migration plan to improve load metrics,
				I also established code guidelines, as well as documented their frontend components and process.
			`,
			images: [],
			tags: [
				'Load optimization',
				'Sitecore',
				'Senior frontend developer'
			]
		},
		{
			description: html`
				<h2 class="--line">Nordea Nora</h2>
				As a consultant at Nordea i helped build the first version of the Nora investment advice tool.
				Initially build in React which i maintained, but later we migrated it to Angular which was Nordea's preferred framework.
				As the senior frontend developer on the project i planned and helped implementing the frontend SPA architecture.
			`,
			images: [
				'http://sebbdk.github.io/Curriculum-Vitae/1.8eec66d1.jpg',
			],
			tags: [
				'Nordea',
				'Angular',
				'React',
				'Redux',
				'Frontend Architecture'
			]
		},
		{
			description: html`
				<h2 class="--line">Nordea pension tools</h2>
				As a consultant, part of a large 20+ person department working on a internal pension tool.
				I helped building new features, preparing their internal tools for MIFID requirements, establishing code standards,
				upgraded their frontend build to solution to webpack, and helped establish better communication between teams.
			`,
			images: [],
			tags: [
				'AngularJS',
				'Angular',
				'Redux',
				'Frontend Architecture'
			]
		},
		{
			description: html`
				<h2 class="--line">Sofus & Månemaskinen</h2>
				Together with Game Designer Malte Burup, i took over development of existing already started flash based mobile game (Android & iOS).
				The game it self is made as an interactive children's book, ages 3-6,
				where the child and their parent has to help the protagonist Sofus solve puzzles to fix the moon.
			`,
			images: [],
			iframe: html`<iframe width="1196" height="383" src="https://www.youtube.com/embed/bDZd9An-jAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
			tags: [
				'Tablet',
				'iOS',
				'Android',
				'Game developer',
				'Flash',
				'ActionScript'
			]
		},
		{
			description: html`
				<h2 class="--line">Go beaver! </h2>
				I was hired to code a small physics puzzle game centered about bridges to unite to beavers.
			`,
			images: [
				'http://sebbdk.github.io/Curriculum-Vitae/1.8887af35.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/2.14431877.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/3.437a0227.jpg',
			],
			tags: [
				'Unity',
				'C#',
				'iOS',
				'Android',
				'Mobile',
				'Game developer'
			]
		},

		{
			description: html`
				<h2 class="--line">Harba</h2>
				For their initial launch May 1. 2016, i made a Cordova based Android/iOS application that allow users to book a Harbor spot.<br />
				<br />
				The intention was to streamline the booking process and gather the various harbors in one place. Saving both the Harbor manager timer handling payments and booking schedules and the clients time looking up contact details.
				I facilitated the development and design of the application, and executed the coding of it until a team could be build to take over.
			`,
			images: [
				'http://sebbdk.github.io/Curriculum-Vitae/1.616dbae2.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/2.a2191872.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/3.f7fbcba3.jpg'
			],
			tags: [
				'AngularJS',
				'Ionic',
				'CakePHP',
				'PHP',
				'Mobile',
				'Mobile app',
				'Fullstack developer',
				'iOS',
				'Android'
			]
		},

		{
			description: html`
				<h2 class="--line">Storebrand reise</h2>
				Developed while subcontracting for HelpApp. Storebrand reise is a application that allows users to send insurance reports directly to their insurance company, centered around travel insurance. The app also allows you to manage your trips and the participants making reporting easier.<br />
				<br />
				My part was to code all the infrastruture, both serverside and client side in the application, and define a API to integrate with SOS and Storebrand in collaboration with their developers.<br />
				<br />
				Storebrand reise and LähiTapiola Matkahätäpalvelu are share the same foundation i made and a functionally very similar.
			`,
			images: [
				'http://sebbdk.github.io/Curriculum-Vitae/1.4ba6c053.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/2.ee1eaa6d.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/3.45456c50.jpg'
			],
			tags: [
				'AngularJS',
				'Ionic',
				'CakePHP',
				'PHP',
				'Mobile',
				'Mobile app',
				'Fullstack developer',
				'iOS',
				'Android'
			]
		},

		{
			description: html`
				<h2 class="--line">LähiTapiola Matkahätäpalvelu</h2>
				Developed while subcontracting for HelpApp. LähiTapiola reise is a application that allows users to send insurance reports directly to their insurance company, centered around travel insurance. The app also allows you to manage your trips and the participants making reporting easier.<br />
				<br />
				My part was to code all the infrastruture, both serverside and client side in the application, and define a API to integrate with SOS and LähiTapiola in collaboration with their developers.
				Storebrand reise and LähiTapiola Matkahätäpalvelu are share the same foundation i made and a functionally very similar.
			`,
			images: [
				'http://sebbdk.github.io/Curriculum-Vitae/1.9faf8985.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/2.32ab4064.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/3.04d3640e.jpg'
			],
			tags: [
				'AngularJS',
				'Ionic',
				'CakePHP',
				'PHP',
				'Mobile',
				'Mobile app',
				'Fullstack developer',
				'iOS',
				'Android'
			]
		},

		{
			description: html`
				<h2 class="--line">Rødt Kort</h2>
				Developed while subcontracting for HelpApp. Rødt Kort is a application that lets you report a car breakdown via a mobile application and the get notified as the case progresses.<br />
				<br />
				The app' basically removes the inital workload of registrering the incident at SOS, and the end user is notified all the way from when the truck is on the way to when the car is ready for pickup at a garage.
				My part was to code all the infrastruture, both serverside and client side in the application, and define a API to integrate with SOS in collaboration with their developers.
			`,
			images: [
				'http://sebbdk.github.io/Curriculum-Vitae/1.403f156f.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/2.35579942.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/3.b3491297.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/4.ee837581.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/5.c45a7aaa.jpg',
			],
			tags: [
				'AngularJS',
				'Ionic',
				'CakePHP',
				'PHP',
				'Mobile',
				'Mobile app',
				'Fullstack developer',
				'iOS',
				'Android'
			]
		},

		{
			description: html`
				<h2 class="--line">AIM Create</h2>
				AIM Create, needed a simple site to represent them online, but also operated on a limited budget.<br />
				<br />
				I helped them setup wordpress and then tutored them to be able to add content on their own.
			`,
			images: [],
			tags: [
				'Website',
				'Wordpress',
				'PHP',
				'Training',
				'Support'
			]
		},

		{
			description: html`
				<h2 class="--line">Søndagsavisen </h2>
				Made in collaboration with another company where they provided design and HTML.<br />
				Søndagsavisen.dk, needed a new website and wordpress was requested.<br />
				I was hired as a contractor to implement the solution in wordpress with the design provided.<br />
				<br />
				The site required a number of optimizations that is not default to wordpress, mostly related to better caching which i implemented.
			`,
			images: [
				'http://sebbdk.github.io/Curriculum-Vitae/1.a64fa701.jpg'
			],
			tags: [
				'Website',
				'Wordpress',
				'PHP',
				'Frontend',
			]
		},

		{
			description: html`
				<h2 class="--line">Rynkedans </h2>
				Rynkedans was a campaign mobile-website and facebook application.<br />
				Rynkedans allows users to videotape the self directly on the website dancing like a monkey. People would then vote on which videos was best and the winners recived a prize.<br />
				<br />
				Made as a subcontractor, was given a PSD design and and specification and i then implemented it on my own.
			`,
			images: [
				'http://sebbdk.github.io/Curriculum-Vitae/1.a476b723.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/2.e3d2c38a.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/3.aa05cbb8.jpg',
			],
			tags: [
				'Website',
				'Facebook',
				'PHP',
				'Video recording',
				'Mobile website',
				'Mobile support'
			]
		},

		{
			description: html`
				<h2 class="--line">Your party-type! </h2>
				Made as a subcontractor i was given design and specification which i executed.<br />
				<br />
				The app was a simple multiple choice web application for Facebook and mobile web.
			`,
			images: [
				'http://sebbdk.github.io/Curriculum-Vitae/1.ad95e65b.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/2.084cc926.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/3.cdeada24.jpg',
			],
			tags: [
				'Website',
				'Facebook',
				'PHP',
				'Video recording',
				'Mobile website'
			]
		},

		{
			description: html`
				<h2 class="--line">Meet Hue</h2>
				Made as a subcontractor i was shown a website and told to mimick it's design with some changes in Danish. Meet Hue was a campaign site with info about events and a slideshow.
			`,
			images: [
				'http://sebbdk.github.io/Curriculum-Vitae/1.425f302a.jpg'
			],
			tags: [
				'Website',
				'Facebook',
				'PHP',
				'Video recording',
				'Mobile website'
			]
		},

		{
			description: html`
				<h2 class="--line">Huawei xmas</h2>
				Made as a subcontractor i was given a initial mockup design and then modified it until the client was happy.<br />
				<br />
				Huawei xmas was a christmass raffle, users would come in everyday from the 1. to the 24. and roll a dice to win a present. The application was intented for facebook mobile the web.<br />
				<br />
				The application was heavily animated using CSS and featured sound as well as a javascript particle making it snow on the site.
			`,
			images: [
				'http://sebbdk.github.io/Curriculum-Vitae/1.ec0aea06.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/2.b96c2075.jpg'
			],
			tags: [
				'Website',
				'Facebook',
				'PHP',
				'Raffle',
				'Mobile website'
			]
		},

		{
			description: html`
				<h2 class="--line">fitnessconsulting.dk </h2>
				fitnessconsulting.dk needed a booking system for client to book times and for the trainers to except/deny bookings.<br />
				<br />
				Given the tight budget i designed and implemented minimally viable booking system for them.
			`,
			images: [
				'http://sebbdk.github.io/Curriculum-Vitae/1.cb63fed2.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/2.e1f50e8b.jpg',
				'http://sebbdk.github.io/Curriculum-Vitae/3.00d6f55e.jpg'
			],
			tags: [
				'Website',
				'PHP',
				'Booking',
				'Fitness'
			]
		}
	]
};




