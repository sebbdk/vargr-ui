import { html } from 'htm/preact';

export const projects = [
	{
		description: html`
			<h2 class="--line">Saxobank Website</h2>
			As a consultant I refactored their build solution for simplicity and performance and helped implement their SPA to none SPA migration plan to improve load metrics,
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
			As a consultant at Nordea I helped build the first version of the Nora investment advice tool.
			Initially build in React which I maintained, but later we migrated it to Angular which was Nordea's preferred framework.
			As the senior frontend developer on the project I planned and helped implementing the frontend SPA architecture.
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
			Together with Game Designer Malte Burup, I took over development of existing already started flash based mobile game (Android & iOS).
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
			For their initial launch May 1. 2016, I made a Cordova based Android/iOS application that allow users to book a Harbor spot.<br />
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
			Developed while subcontracting for HelpApp. Storebrand reise is an application that allows users to send insurance reports directly to their insurance company, centered around travel insurance. The app also allows you to manage your trips and the participants making reporting easier.<br />
			<br />
			My part was to code all the infrastruture, both serverside and client side in the application, and define a API to integrate with SOS and Storebrand in collaboration with their developers.<br />
			<br />
			Storebrand reise and LähiTapiola Matkahätäpalvelu are share the same foundation I made and a functionally very similar.
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
			Developed while subcontracting for HelpApp. LähiTapiola reise is an application that allows users to send insurance reports directly to their insurance company, centered around travel insurance. The app also allows you to manage your trips and the participants making reporting easier.<br />
			<br />
			My part was to code all the infrastruture, both serverside and client side in the application, and define a API to integrate with SOS and LähiTapiola in collaboration with their developers.
			Storebrand reise and LähiTapiola Matkahätäpalvelu are share the same foundation I made and a functionally very similar.
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
			Developed while subcontracting for HelpApp. Rødt Kort is an application that lets you report a car breakdown via a mobile application and the get notified as the case progresses.<br />
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
			The site required a number of optimizations that is not default to wordpress, mostly related to better caching which I implemented.
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
			Made as a subcontractor, was given a PSD design and and specification and I then implemented it on my own.
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
			Made as a subcontractor I was given design and specification which I executed.<br />
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
			Made as a subcontractor I was shown a website and told to mimick it's design with some changes in Danish. Meet Hue was a campaign site with info about events and a slideshow.
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
			Made as a subcontractor I was given a initial mockup design and then modified it until the client was happy.<br />
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
			Given the tight budget I designed and implemented minimally viable booking system for them.
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