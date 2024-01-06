import { html } from "htm/preact"
import styled from "styled-components";

export const TodoRowElm = styled.div`
	--mheight: calc(var(--line-height) - 0.1rem);

	display: flex;
	height: var(--mheight);
	padding: 0.25rem;
	line-height: var(--mheight);
	position: relative;
	text-overflow: ellipsis;
	box-sizing: content-box;

	@media print  {
		padding: 0.1rem 0;
	}

	label {
		display: flex;
		width: -webkit-fill-available;
	}

	.text {
		margin-left: 0.5rem;
	}

	input[type=text] {
		display: block;
		width: -webkit-fill-available;
		padding-left: 0.75rem;
		background-color: transparent;
		border: 0;
		line-height: var(--mheight);
		color: var(--primary-color)
	}

	input[type=checkbox] {
		--width: var(--mheight);
		--height: var(--mheight);
		--halfWidth: calc(var(--width)/2);

		width: 0;
		/*margin-right: calc(var(--size-multiplier)*1.5rem);*/
		position: relative;
		display: inline-block;
		margin: 0rem var(--halfWidth);

		&:after {
			display: block;
			box-sizing: border-box;
			content: " ";
			border: 2px solid var(--primary-borders);
			background-color: var(--checkbox-background-color);
			border-radius: 2px;

			width: calc(var(--width));
			height: calc(var(--height));
			position: absolute;
			left: calc(var(--halfWidth)*(-1));
			top: 0;
		}

		&:checked {
			&:after {
				background-color: var(--checkbox-background-color-active);
				border-color: var(--highlighted-borders);
			}

			&:before {
				display: block;
				content: " ";
				border: solid rgba(0,0,0, 0.5);
				border-width: 0 3px 3px 0;
				-webkit-transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				transform: rotate(45deg);

				width: 7px;
				height: 12px;

				position: absolute;
				top: calc(var(--height) * 0.15);
				left: calc(var(--width) * -0.2);
				z-index: 200;

				@media print  {
				}
			}
		}
	}
`

const MultiCheck = styled.div`
	display: flex;
	gap: 0.25rem;

	input[type=checkbox] {
		flex-grow: 0;
	}
`;

export function TodoRow({ children, multiCheck = 0 }) {
	let multiCheckElms = '';

	if(multiCheck > 0) {
		multiCheckElms = html`
			<${MultiCheck}>
				${Array.apply(null, Array(multiCheck)).map(i => html`<input type="checkbox" />`)}
			</${MultiCheck}>
		`
	}

	if(!children) {
		return html`
			<${TodoRowElm}>
				<input type="checkbox" />
				<input type="text" />
				${multiCheckElms}
			</${TodoRowElm}>
		`;
	}

	return html`
		<${TodoRowElm}>
			<label>
				<input type="checkbox" />
				<span class="text">${children}</span>
			</label>
			${multiCheckElms}
		</${TodoRowElm}>
	`;
}