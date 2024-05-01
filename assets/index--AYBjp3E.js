import{u as i,m}from"./styled-components.browser.esm-LOVPg310.js";const t=i.div`
	h1, h2, h3 {
		margin: 0;
		font-size: 1em;
		line-height: 1em;
		margin-bottom: 1rem;
		font-weight: 700;
		color: rgba(255, 255, 255, 1);

		&:last-child {
			margin-bottom: 0;
		}

		small {
			font-size: 0.75em;
			font-weight: 300;
		}
	}

	img {
		max-width: 100%;
		max-height: 100%;
	}

	.--framed {
		border-radius: 0.25rem;
		box-shadow: 0 0 10px rgb(0 0 0 / 20%);
	}

	h1 { font-size: 2em; }
	h2 { font-size: 1.25em; font-weight: 700; }
	h3 { font-size: 1em; font-weight: 500; }

	b {
		color: rgba(255, 255, 255, 1);
	}

	p {
		color: rgba(255, 255, 255, 0.8);
		margin: 1rem 0;

		&:last-of-type {
			margin-bottom: 0;
		}
	}

	ul {
		margin: 0.5em 0;
		margin-left: 1em;
		padding-inline-start: 1rem;

		li {
			line-height: 1.25em;
			font-size: 1em;
		}

		ul {
			padding-inline-start: 0.5rem;
		}
	}

	.--line {
		border-bottom: 1px solid #999;
	}
`,r=({children:e})=>m`
		<${t}>
			${e}
		</${t}>
	`;export{r as R,t as a};
