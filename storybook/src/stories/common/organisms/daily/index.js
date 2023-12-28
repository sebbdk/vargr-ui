import { html } from "htm/preact"
import styled from "styled-components";

const TodoRowElm = styled.label`
	display: block;
	height: 2.15rem;
	line-height: 2rem;
	position: relative;
	padding: 0 0.5rem;
	text-overflow: ellipsis;

	input {
		margin-right: 1.5rem;

		&:after {
			display: block;
			content: " ";
			border: 1px solid rgba(255, 255, 255, 0.25);
			background-color: rgba(177,177,177);
			border-radius: 2px;


			width: calc(1.75rem - 2*0.25rem);
			height: calc(1.75rem - 2*0.25rem);
			position: absolute;
			left: 0.75rem;
			top: 0.35rem;
		}

		&:checked {
			&:after {
				background-color: rgba(230, 230, 230);
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
				left: 1.1rem;
				top: 0.4rem;
				z-index: 200;
			}
		}
	}
`

function TodoRow({ children }) {
	return html`
		<${TodoRowElm}>
			<input type="checkbox" checked />
			${children}
		</${TodoRowElm}>
	`;
}

const TodoGroupElm = styled.div`
	border: 1px solid rgba(255, 255, 255, 0.1);
	flex-grow: 1;
	margin: 1rem;
	border-radius: 2px;

	${TodoRowElm}:nth-child(even) {
		background-color: rgba(0,0,0, 0.1);
	}
`;

const TodoGroupTitleElm = styled.div`
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	padding: 0.5rem 3rem;
	font-size: 1.25em;
`;

const LayoutElm = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: normal;
	align-items: stretch;
	align-content: stretch;
`

export function Daily({ ...props }) {
	const group = [
		{ label: 'Hello lorem ipsom' },
		{ label: 'I' },
		{ label: 'Like' },
		{ label: 'Cake' },
	];

	return html`
		<${LayoutElm}>
			<${TodoGroupElm}>
				<${TodoGroupTitleElm}>Have to-do</${TodoGroupTitleElm}>
				${group.map(i => html`<${TodoRow}>${i.label}</${TodoRow}>`)}
			</${TodoGroupElm}>
			<${TodoGroupElm}>
				<${TodoGroupTitleElm}>Dailies</${TodoGroupTitleElm}>
				${group.map(i => html`<${TodoRow}>${i.label}</${TodoRow}>`)}
			</${TodoGroupElm}>
			<${TodoGroupElm}>
			<${TodoGroupTitleElm}>Nice to-do</${TodoGroupTitleElm}>
				${group.map(i => html`<${TodoRow}>${i.label}</${TodoRow}>`)}
			</${TodoGroupElm}>
		</${LayoutElm}>
	`
}