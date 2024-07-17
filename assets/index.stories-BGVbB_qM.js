import{d as T,u as l,m as i}from"./styled-components.browser.esm-LOVPg310.js";import{a as n,R as r}from"./index-i10x-FPT.js";import{a as c,S as e}from"./index-d3A5-BcP.js";import{a,S as m}from"./index-lHSqyosL.js";import{a as I,T as b}from"./index-Ns9fgDpF.js";import{P as h}from"./index-RflmMuot.js";import{B as u}from"./index-Wa5dPq5a.js";import"./preact.module-0A_VdQ5M.js";import"./compat.module-qtfPsa-n.js";import"./index-g-2SN6mO.js";const R=T`
	body {
		@media print  {
			font-size: 12px;

			@page {
				size: 8.5in 11in;
			}
		}
	}
`,g=l.div`
	margin-top: 2.5rem;
	display: grid;
	grid-template-columns: auto;

	box-shadow: 0px 0px 2rem rgb(0 0 0 / 20%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 2rem;
    border-radius: 0.25rem;
    overflow: hidden;

	${a} {
		max-width: initial;
	}

	${a} > ${n} {
		display: grid;
		grid-template-columns: auto auto;
		grid-gap: 1rem;

		img {
			width: 100%;
			height: 17rem;
			background-color: rgba(255, 255, 255, 0.5);
			max-height: 12rem;
			object-fit: cover;
			border: 1px solid rgba(0, 0, 0, 0.5);
		}
	}

	@media (min-width: 900px), print {
		grid-template-columns: auto auto;

		${a} {
			max-width: 18rem;
		}

		${a} > ${n} {
			display: block;
			img {
				max-height: initial;
				margin-bottom: 1rem;
			}
		}
	}

    @media print {
		min-width: 230mm;
        ::-webkit-scrollbar {
            min-width: initial;
        }

		${a} {
			max-width: 12rem;
		}

		margin: 0;

		color: #333;
		box-shadow: none;
		border-left: 1px solid #ddd;
		border-right: 1px solid #ddd;
		border-radius: 0rem;

		p, b {
			color: #333;
		}

		p {
			margin: 0.75rem 0;
		}
    }
`,$=l.div`
	display: grid;
    grid-template-columns: minmax(0, 1fr);

	background-color: rgba(255,255,255, 0.1);
	height: 100%;
	flex-shrink: 1;

	@media print {
		background-color: #fff;
	}

	> ${n} {
		padding: 1em;
	}

	${I} {
		margin-top: 1em;
		padding: 1em;
		background-color: rgba(0, 0, 0, 0.25);

		@media print {
			background-color: #fff;
			margin-top: 0;
		}
	}
`,f=l.div`
	grid-column: 1 / span 1;
    max-width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
	padding: 1rem;
	background-color: rgba(255,255,255,0.1);

	@media print {
		background-color: #fff;
		border-top: 1px solid #ddd;
	}

	@media (min-width: 900px), print {
		grid-column: 1 / span 2;
	}
`,s=({profile:o,introduction:y,experiences:S,skills:P,experienceTitle:A,projects:M})=>{const C=M.map(p=>i`<${h} ...${p}>${p.description}</${h}>`),j=new URL(document.location.href),d=new URLSearchParams(j.search).get("hideProjects")!=null;console.info("ResumePage settings:"),console.info(`[get_param:boolean] hideProjects=${d}`);const x=d?"":i`
		<${f}>
			<${r}>
				<h1 class="--line">Projects</h1>
				<p>
				An outtake of some of the projects I have involved myself in, my career has involved hundreds of projects.
				</p>
			</${r}>
			${C}
		</${f}>
	`;return i`
		<${g}>
			<${R} />
			<${m} ...${o}>
				${o}
				<${c} groups=${P}></${c}>
			</${m}>
			<${$}>
				<${r}>${y}</${r}>
				<${b} items=${S} title=${A}></${b}>
			</${$}>

			${x}
		</${g}>
	`},V=""+new URL("profile_picture-nvg94rKs.jpg",import.meta.url).href,H=[{description:i`
			<h2 class="--line">Saxobank Website</h2>
			As a consultant i refactored their build solution for simplicity and performance and helped implement their SPA to none SPA migration plan to improve load metrics,
			I also established code guidelines, as well as documented their frontend components and process.
		`,images:[],tags:["Load optimization","Sitecore","Senior frontend developer"]},{description:i`
			<h2 class="--line">Nordea Nora</h2>
			As a consultant at Nordea i helped build the first version of the Nora investment advice tool.
			Initially build in React which i maintained, but later we migrated it to Angular which was Nordea's preferred framework.
			As the senior frontend developer on the project i planned and helped implementing the frontend SPA architecture.
		`,images:["http://sebbdk.github.io/Curriculum-Vitae/1.8eec66d1.jpg"],tags:["Nordea","Angular","React","Redux","Frontend Architecture"]},{description:i`
			<h2 class="--line">Nordea pension tools</h2>
			As a consultant, part of a large 20+ person department working on a internal pension tool.
			I helped building new features, preparing their internal tools for MIFID requirements, establishing code standards,
			upgraded their frontend build to solution to webpack, and helped establish better communication between teams.
		`,images:[],tags:["AngularJS","Angular","Redux","Frontend Architecture"]},{description:i`
			<h2 class="--line">Sofus & Månemaskinen</h2>
			Together with Game Designer Malte Burup, i took over development of existing already started flash based mobile game (Android & iOS).
			The game it self is made as an interactive children's book, ages 3-6,
			where the child and their parent has to help the protagonist Sofus solve puzzles to fix the moon.
		`,images:[],iframe:i`<iframe width="1196" height="383" src="https://www.youtube.com/embed/bDZd9An-jAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,tags:["Tablet","iOS","Android","Game developer","Flash","ActionScript"]},{description:i`
			<h2 class="--line">Go beaver! </h2>
			I was hired to code a small physics puzzle game centered about bridges to unite to beavers.
		`,images:["http://sebbdk.github.io/Curriculum-Vitae/1.8887af35.jpg","http://sebbdk.github.io/Curriculum-Vitae/2.14431877.jpg","http://sebbdk.github.io/Curriculum-Vitae/3.437a0227.jpg"],tags:["Unity","C#","iOS","Android","Mobile","Game developer"]},{description:i`
			<h2 class="--line">Harba</h2>
			For their initial launch May 1. 2016, i made a Cordova based Android/iOS application that allow users to book a Harbor spot.<br />
			<br />
			The intention was to streamline the booking process and gather the various harbors in one place. Saving both the Harbor manager timer handling payments and booking schedules and the clients time looking up contact details.
			I facilitated the development and design of the application, and executed the coding of it until a team could be build to take over.
		`,images:["http://sebbdk.github.io/Curriculum-Vitae/1.616dbae2.jpg","http://sebbdk.github.io/Curriculum-Vitae/2.a2191872.jpg","http://sebbdk.github.io/Curriculum-Vitae/3.f7fbcba3.jpg"],tags:["AngularJS","Ionic","CakePHP","PHP","Mobile","Mobile app","Fullstack developer","iOS","Android"]},{description:i`
			<h2 class="--line">Storebrand reise</h2>
			Developed while subcontracting for HelpApp. Storebrand reise is a application that allows users to send insurance reports directly to their insurance company, centered around travel insurance. The app also allows you to manage your trips and the participants making reporting easier.<br />
			<br />
			My part was to code all the infrastruture, both serverside and client side in the application, and define a API to integrate with SOS and Storebrand in collaboration with their developers.<br />
			<br />
			Storebrand reise and LähiTapiola Matkahätäpalvelu are share the same foundation i made and a functionally very similar.
		`,images:["http://sebbdk.github.io/Curriculum-Vitae/1.4ba6c053.jpg","http://sebbdk.github.io/Curriculum-Vitae/2.ee1eaa6d.jpg","http://sebbdk.github.io/Curriculum-Vitae/3.45456c50.jpg"],tags:["AngularJS","Ionic","CakePHP","PHP","Mobile","Mobile app","Fullstack developer","iOS","Android"]},{description:i`
			<h2 class="--line">LähiTapiola Matkahätäpalvelu</h2>
			Developed while subcontracting for HelpApp. LähiTapiola reise is a application that allows users to send insurance reports directly to their insurance company, centered around travel insurance. The app also allows you to manage your trips and the participants making reporting easier.<br />
			<br />
			My part was to code all the infrastruture, both serverside and client side in the application, and define a API to integrate with SOS and LähiTapiola in collaboration with their developers.
			Storebrand reise and LähiTapiola Matkahätäpalvelu are share the same foundation i made and a functionally very similar.
		`,images:["http://sebbdk.github.io/Curriculum-Vitae/1.9faf8985.jpg","http://sebbdk.github.io/Curriculum-Vitae/2.32ab4064.jpg","http://sebbdk.github.io/Curriculum-Vitae/3.04d3640e.jpg"],tags:["AngularJS","Ionic","CakePHP","PHP","Mobile","Mobile app","Fullstack developer","iOS","Android"]},{description:i`
			<h2 class="--line">Rødt Kort</h2>
			Developed while subcontracting for HelpApp. Rødt Kort is a application that lets you report a car breakdown via a mobile application and the get notified as the case progresses.<br />
			<br />
			The app' basically removes the inital workload of registrering the incident at SOS, and the end user is notified all the way from when the truck is on the way to when the car is ready for pickup at a garage.
			My part was to code all the infrastruture, both serverside and client side in the application, and define a API to integrate with SOS in collaboration with their developers.
		`,images:["http://sebbdk.github.io/Curriculum-Vitae/1.403f156f.jpg","http://sebbdk.github.io/Curriculum-Vitae/2.35579942.jpg","http://sebbdk.github.io/Curriculum-Vitae/3.b3491297.jpg","http://sebbdk.github.io/Curriculum-Vitae/4.ee837581.jpg","http://sebbdk.github.io/Curriculum-Vitae/5.c45a7aaa.jpg"],tags:["AngularJS","Ionic","CakePHP","PHP","Mobile","Mobile app","Fullstack developer","iOS","Android"]},{description:i`
			<h2 class="--line">AIM Create</h2>
			AIM Create, needed a simple site to represent them online, but also operated on a limited budget.<br />
			<br />
			I helped them setup wordpress and then tutored them to be able to add content on their own.
		`,images:[],tags:["Website","Wordpress","PHP","Training","Support"]},{description:i`
			<h2 class="--line">Søndagsavisen </h2>
			Made in collaboration with another company where they provided design and HTML.<br />
			Søndagsavisen.dk, needed a new website and wordpress was requested.<br />
			I was hired as a contractor to implement the solution in wordpress with the design provided.<br />
			<br />
			The site required a number of optimizations that is not default to wordpress, mostly related to better caching which i implemented.
		`,images:["http://sebbdk.github.io/Curriculum-Vitae/1.a64fa701.jpg"],tags:["Website","Wordpress","PHP","Frontend"]},{description:i`
			<h2 class="--line">Rynkedans </h2>
			Rynkedans was a campaign mobile-website and facebook application.<br />
			Rynkedans allows users to videotape the self directly on the website dancing like a monkey. People would then vote on which videos was best and the winners recived a prize.<br />
			<br />
			Made as a subcontractor, was given a PSD design and and specification and i then implemented it on my own.
		`,images:["http://sebbdk.github.io/Curriculum-Vitae/1.a476b723.jpg","http://sebbdk.github.io/Curriculum-Vitae/2.e3d2c38a.jpg","http://sebbdk.github.io/Curriculum-Vitae/3.aa05cbb8.jpg"],tags:["Website","Facebook","PHP","Video recording","Mobile website","Mobile support"]},{description:i`
			<h2 class="--line">Your party-type! </h2>
			Made as a subcontractor i was given design and specification which i executed.<br />
			<br />
			The app was a simple multiple choice web application for Facebook and mobile web.
		`,images:["http://sebbdk.github.io/Curriculum-Vitae/1.ad95e65b.jpg","http://sebbdk.github.io/Curriculum-Vitae/2.084cc926.jpg","http://sebbdk.github.io/Curriculum-Vitae/3.cdeada24.jpg"],tags:["Website","Facebook","PHP","Video recording","Mobile website"]},{description:i`
			<h2 class="--line">Meet Hue</h2>
			Made as a subcontractor i was shown a website and told to mimick it's design with some changes in Danish. Meet Hue was a campaign site with info about events and a slideshow.
		`,images:["http://sebbdk.github.io/Curriculum-Vitae/1.425f302a.jpg"],tags:["Website","Facebook","PHP","Video recording","Mobile website"]},{description:i`
			<h2 class="--line">Huawei xmas</h2>
			Made as a subcontractor i was given a initial mockup design and then modified it until the client was happy.<br />
			<br />
			Huawei xmas was a christmass raffle, users would come in everyday from the 1. to the 24. and roll a dice to win a present. The application was intented for facebook mobile the web.<br />
			<br />
			The application was heavily animated using CSS and featured sound as well as a javascript particle making it snow on the site.
		`,images:["http://sebbdk.github.io/Curriculum-Vitae/1.ec0aea06.jpg","http://sebbdk.github.io/Curriculum-Vitae/2.b96c2075.jpg"],tags:["Website","Facebook","PHP","Raffle","Mobile website"]},{description:i`
			<h2 class="--line">fitnessconsulting.dk </h2>
			fitnessconsulting.dk needed a booking system for client to book times and for the trainers to except/deny bookings.<br />
			<br />
			Given the tight budget i designed and implemented minimally viable booking system for them.
		`,images:["http://sebbdk.github.io/Curriculum-Vitae/1.cb63fed2.jpg","http://sebbdk.github.io/Curriculum-Vitae/2.e1f50e8b.jpg","http://sebbdk.github.io/Curriculum-Vitae/3.00d6f55e.jpg"],tags:["Website","PHP","Booking","Fitness"]}],D=[{label:"Current",content:i`
			<h3>Entity51 - My freelance business<br /><small><b>Owner</b>, October 2013 - present</small></h3>
			<p>
			My freelance business. Always running in the background when i'm not on a fulltime contract. The work consists mostly of consulting, web and mobile application development/maintenence.
			</p>
			<p>
				<${e}>Angular</${e}>
				<${e}>AngularJS</${e}>
				<${e}>React</${e}>
				<${e}>Javascript</${e}>
				<${e}>Typescript</${e}>
				<${e}>Facebook</${e}>
				<${e}>REST API</${e}>
				<${e}>Websocket</${e}>
				<${e}>Cordova</${e}>
				<${e}>PHP</${e}>
				<${e}>Unity3D</${e}>
				<${e}>C#</${e}>
				<${e}>iOS</${e}>
				<${e}>Android</${e}>
				<${e}>Website optimization</${e}>
				<${e}>SPA</${e}>
				<${e}>Redux</${e}>
				<${e}>UX</${e}>
				<${e}>MongoDB</${e}>
				<${e}>MySQL</${e}>
				<${e}>Docker</${e}>
				<${e}>XML</${e}>
				<${e}>XPath</${e}>
			</p>
		`},{label:"2023",content:i`
			<h3>Software Engineer<br /> <small><b>Arcanic</b>, November 2023 - April 2024</small></h3>
			<p>I was taking some courses at DTU, while doing that i worked part time as Arcanic on a UI for a new product using Blazor and .net</p>
			<p>
				<${e}>Blazor</${e}>
				<${e}>MudBlazor</${e}>
				<${e}>Javascript</${e}>
				<${e}>.net</${e}>
				<${e}>MSSQL</${e}>
			</p>
		`},{label:"2022",content:i`
			<h3>Web SDK lead<br /> <small><b>CellPoint Digital</b>, April 2022 - August 2022</small></h3>
			<p>I was hired to prototype their web payment orchestration client SDK meant to simplify implementation for vendors and later replace the existing client SDK.</p>
			<p>The work involved being part-time onsite with the clients' team in Pune, India.</p>
			<p>
				<${e}>React</${e}>
				<${e}>UX</${e}>
				<${e}>Typescript</${e}>
				<${e}>Redux</${e}>
				<${e}>Kubernetes</${e}>
				<${e}>XML</${e}>
			</p>
		`},{label:"2021",content:i`
			<h3>Senior fullstack consultant  <br /> <small><b>DSV - Global Transport and Logistics</b>, October 2021 - April 2022</small></h3>
			<p>I was responsible for implementation and UX of a GUI meant to handle the invoices our machine learning models could not handle confidently.</p>
			<p>This included creating an application that allowed users to visually generate XPath configurations for XML invoices.<p>
			<p>The GUI was made in a way were the Invoices could easily/quickly be verified manually in bulk.</p>
			<p>The corrected invoice data then fed back into the machine learning models.</p>
			<p>
				<${e}>React</${e}>
				<${e}>Typescript</${e}>
				<${e}>Redux</${e}>
				<${e}>C#</${e}>
				<${e}>UX</${e}>
				<${e}>Java</${e}>
				<${e}>Java Spring</${e}>
				<${e}>Kubernetes</${e}>
				<${e}>MongoDB</${e}>
				<${e}>MySQL</${e}>
				<${e}>XML</${e}>
				<${e}>XPath</${e}>
			</p>
		`},{label:"2021",content:i`
			<h3>Domain lead  <br /> <small><b>SimpleSite</b>, March 2021 - October 2021</small></h3>
			<p>I was one of two domain leads in charge of different parts of the frontend architecture.</p>
			<p>My responsibilities as domain lead was similar to that of a team lead, but with the scrum master related tasks removed so i could focus more one the architecture & performance.</p>
			<p>
				<${e}>Angular</${e}>
				<${e}>React</${e}>
				<${e}>Typescript</${e}>
				<${e}>Redux</${e}>
				<${e}>C#</${e}>
				<${e}>XML</${e}>
			</p>
		`},{label:"2020",content:i`
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
				<${e}>XML</${e}>
			</ul>

			<p>Apart from this i also orchestrated a new release and testing schedule which cut back on bugs in production significantly.</p>

			<p>
				<${e}>Angular</${e}>
				<${e}>React</${e}>
				<${e}>Typescript</${e}>
				<${e}>Redux</${e}>
				<${e}>C#</${e}>
				<${e}>XML</${e}>
			</p>
		`},{label:"2019",content:i`
			<h3>Senior frontend developer <br /> <small><b>SimpleSite</b>, February 2019</small></h3>
			<p>
				I joined SimpleSite as a Senior developer as they needed someone with experience to improve & develop for their their Angular solution.
			</p>
			<p>
				<${e}>Angular</${e}>
				<${e}>React</${e}>
				<${e}>Typescript</${e}>
				<${e}>Redux</${e}>
				<${e}>C#</${e}>
				<${e}>XML</${e}>
			</p>
		`},{label:"2018",content:i`
			<h3>Senior frontend consultant <br /> <small><b>Saxo Bank</b>, January 2018 - December 2018</small></h3>
			<p>
				I refactored their build solution for simplicity and performance and helped migrate their old site from a bloated SPA solution to none SPA to improve load metrics, established code guidelines, as well as documented their frontend library.
			</p>
			<p>
				<${e}>AngularJS</${e}>
				<${e}>Javascript</${e}>
				<${e}>C#</${e}>
				<${e}>Sitecore</${e}>
				<${e}>XML</${e}>
			</p>
		`},{label:"2016",content:i`
			<h3>Senior frontend consultant <br /> <small><b>Nordea</b>, July 2016 - December 2018</small></h3>
			<p>Refactored their build system and established basic coding standards to enable their rather sizable team working on their internal AngularJS based pension management tools.</p>
			<p>Also worked on the first version of their Angular based Nora investment tool solution.</p>

			<p>
				<${e}>Angular</${e}>
				<${e}>React</${e}>
				<${e}>Redux</${e}>
				<${e}>Java</${e}>
				<${e}>Springboot</${e}>
				<${e}>XML</${e}>
			</p>
		`},{label:"2013",content:i`
			<h3>Started freelance business<br /><small><b>Owner</b>, October 2013 - present</small></h3>
			<p>I started my freelance business.</p>
			<p>
				The work consists mostly of subcontracts to make social media SPA's, campaign and Cordova based mobile applications. More interestingly i helped a few startups get going technically and also coded a few mobile games in collaboration with independent game designers.
			</p>
			<p>
				<${e}>AngularJS</${e}>
				<${e}>Javascript</${e}>
				<${e}>Facebook</${e}>
				<${e}>Cordova</${e}>
				<${e}>PHP</${e}>
				<${e}>Unity3D</${e}>
				<${e}>C#</${e}>
				<${e}>iOS</${e}>
				<${e}>Android</${e}>
			</p>
		`},{label:"2009",content:i`
			<h3>Developer <br /> <small><b>Nodes</b>, December 2009 - October 2013</small></h3>
			<p>Worked as a developer pumping out Facebook applications, in the ~4 years i was there, i was involved in more than 250 applications and pages or varying size.</p>
			<p>Probably the most varied place i have ever worked, one day i would be making a tool for people to record them self as two highpitched german nuts, complete with with facial tracking and southpark like animated mouths, and the next i would be placing a few million footballs in virtual space for an augmented reality application. Also got to make obscure flash games, applications where people could make their own sausage face designs etc etc.</p>
			<p>And most of it in a browser setting.</p>
			<p>
				<${e}>AngularJS</${e}>
				<${e}>Javascript</${e}>
				<${e}>Facebook</${e}>
				<${e}>PHP</${e}>
				<${e}>CakePHP</${e}>
				<${e}>Flash</${e}>
				<${e}>Actionscript</${e}>
				<${e}>XML</${e}>
				<${e}>SOAP</${e}>
			</p>
		`},{label:"2007",content:i`
			<h3>Developer <br /> <small>Decaro</small></h3>
			<p>My first job as a web-developer, made Joomla based websites and Adobe Flex based flash applications.</p>
			<p>
				<${e}>Javascript</${e}>
				<${e}>PHP</${e}>
				<${e}>Joomla</${e}>
				<${e}>Flash</${e}>
				<${e}>Actionscript</${e}>
				<${e}>SOAP</${e}>
				<${e}>XML</${e}>
			</p>
		`},{label:"2006",content:i`
			<h3>Webintegrator <br /> <small>Roskilde technical school</small></h3>
			<p>Studied generic web development, not limited to but including coding, UI design, and project management.</p>
		`}],L=[{title:i`Languages <small>The human ones</small>`,items:["English","Danish"]},{title:i`Programming languages <small>Abbreviated</small>`,items:["Javascript","Typescript","C#","Java","CSS","HTML","PHP"]},{title:i`Tools & frameworks <small>Abbreviated</small>`,items:["Git","NodeJS","Unity3D","MySQL","MongoDB","Webpack","Angular","React","XML","XPAth","JSON"]},{title:i`Patterns, soft-skills, roles <small>Abbreviated</small>`,items:["CI/TD","Unit testing","Project management","E2E testing","SEO","Backend development","Frontend development","Team-lead"]}],_={title:"pages/resume",component:s,argTypes:{}},J=o=>i`
    <${u}>
        <${s} ...${o}></${s}>
    </${u}>
`,t=J.bind({});t.args={profile:i`
        <div>
            <img className="--framed" src="${V}" />
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
    `,introduction:i`
        <h1 className="--line">
            Sebastian Vargr <small>Developing developer</small>
        </h1>
        <p>
            My name is Sebastian Vargr, and I am an application developer from Copenhagen, Denmark.
        </p>

        <p>I am a full stack developer with a nose for business value. I bring value by building, teaching, mentoring, organizing, and solving problems in code or application design.</p>

        <p>I am driven by my passion for all things code and by seeing my projects succeed because success is the best proof that I am good at my craft. Because of this, when appropriate, I am vocal when I see issues, non-disruptive when I integrate myself into existing projects and proactive about solving & optimizing both productivity and technical issues.</p>

        <p>In my spare time, I take care of my lazy cats, like to run, work on hobby electronics (like my CNC cutter & 3D printer) and game when I find can find the time.</p>
    `,experienceTitle:"History",experiences:D,skills:L,projects:H};var w,k,v;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:"args => html`\n    <${BasePage}>\n        <${ResumePage} ...${args}></${ResumePage}>\n    </${BasePage}>\n`",...(v=(k=t.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const q=["Primary"];export{t as Primary,q as __namedExportsOrder,_ as default};