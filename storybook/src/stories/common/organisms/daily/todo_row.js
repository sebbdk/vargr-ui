import { html } from "htm/preact"
import styled from "styled-components";

export const TodoRowElm = styled.div`
	display: flex;
	height: var(--line-height);
	line-height: var(--line-height);
	position: relative;
	padding: 0 0.5rem;
	text-overflow: ellipsis;

	label {
		display: flex;
		width: -webkit-fill-available;
	}

	input[type=text] {
		display: block;
		width: -webkit-fill-available;
		padding-left: 0.75rem;
		background-color: transparent;
		border: 0;
		line-height: var(--line-height);
		color: var(--primary-color)
	}

	input[type=checkbox] {
		margin-right: calc(var(--size-multiplier)*1.5rem);
		position: relative;
		display: inline-block;

		&:after {
			display: block;
			content: " ";
			border: 1px solid var(--primary-borders);
			background-color: var(--checkbox-background-color);
			border-radius: 2px;

			width: calc(var(--size-multiplier)*1.75rem - 2*0.25rem);
			height: calc(var(--size-multiplier)*1.75rem - 2*0.25rem);
			position: absolute;
			left: -0.25rem;
			top: 0.1rem;
		}

		&:checked {
			&:after {
				background-color: var(--checkbox-background-color-active);
				border: 1px solid rgba(0, 0, 0, 0.2);
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
				left: 0.10rem;

				top: 0.2rem;
				z-index: 200;

				@media print  {
					top: 0.4rem;
					left: 0.3rem;
				}
			}
		}
	}
`

const MultiCheck = styled.div`
	display: flex;

	input[type=checkbox] {
		flex-grow: 0;
		margin-right: .75rem;

		@media print  {
			margin-right: 1rem;
		}
	}
`;

export function TodoRow({ children, multiCheck = 2 }) {
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
				${children}
			</label>
			${multiCheckElms}
		</${TodoRowElm}>
	`;
}