import { html } from "htm/preact"
import styled from "styled-components";

const TodoRowElm = styled.div`
	display: flex;
	height: var(--line-height);
	line-height: var(--line-height);
	position: relative;
	padding: 0 0.5rem;
	text-overflow: ellipsis;

	label {
		display: block;
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

		&:after {
			display: block;
			content: " ";
			border: 1px solid var(--primary-borders);
			background-color: var(--checkbox-background-color);
			border-radius: 2px;

			width: calc(var(--size-multiplier)*1.75rem - 2*0.25rem);
			height: calc(var(--size-multiplier)*1.75rem - 2*0.25rem);
			position: absolute;
			left: var(--size-multiplier)*0.75rem;
			top: 0.3rem;
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
				left: 1.10rem;

				top: 0.35rem;
				z-index: 200;

				@media print  {
					top: 0.55rem;
					left: 1.4rem;
				}
			}
		}
	}
`

function TodoRow({ children }) {
	const child = children ? children : html`<input type="text" />`


	if(!children) {
		return html`
			<${TodoRowElm}>
				<input type="checkbox" />
				<input type="text" />
			</${TodoRowElm}>
		`;
	}

	return html`
		<${TodoRowElm}>
			<label>
				<input type="checkbox" />
				${children}
			</label>
		</${TodoRowElm}>
	`;
}

const TodoGroupElm = styled.div`
	border: 1px solid var(--primary-borders);
	flex-grow: 0;
	margin: 1rem;
	border-radius: 2px;

	@media print  {
		border: 0;
	}

	${TodoRowElm}:nth-child(even) {
		background-color: rgba(0,0,0, 0.1);
	}

	@media print  {
		${TodoRowElm}:nth-child(even) {
			background-color: transparent;
		}

		${TodoRowElm} {
			border-bottom: 2px dotted var(--primary-borders);
		}
	}
`;

const TodoColumn = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`;

const TodoGroupTitleElm = styled.div`
	border-bottom: 1px solid var(--primary-borders);
	padding: 0.5rem 0.75rem;
	font-size: calc(1.25em * var(--size-multiplier));

	@media print  {
		border-width: 2px;
	}
`;

const LayoutElm = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: normal;
	align-items: stretch;
	align-content: stretch;
	margin: auto;
    height: fit-content;

	--size-multiplier: 1;
	--line-height: calc(2rem * var(--size-multiplier));
	--checkbox-background-color: rgba(177,177,177);
	--checkbox-background-color-active: rgba(230, 230, 230);
	--title-color: var(--primary-color);

	@media print  {
		margin: 3rem;
		margin-top: 5rem;
		--title-color: rgba(0,0,0, 0.5);
		--size-multiplier: 1.25;
		--checkbox-background-color: #fff;
		--checkbox-background-color-active: rgba(230, 230, 230);
	}

	input {
		font-size: 1em;
	}
`;

const HaikuDiaryElm = styled.div`
	border: 1px solid var(--primary-borders);
	flex-grow: 1;
	margin: 1rem;
	border-radius: 2px;
	margin-top: auto;
	flex-grow: 0;

	input {
		display: block;
		width: -webkit-fill-available;
		padding-left: 0.75rem;
		background-color: transparent;
		border: 0;
		border-bottom: 2px dotted var(--primary-borders);
		line-height: var(--line-height);
		color: var(--primary-color)
	}

	input:last-of-type {
		border-bottom: 0;
	}

	@media print  {
		border: 0;

		input:last-of-type {
			border-bottom: 2px dotted var(--primary-borders);
		}
	}
`;

const TopCommentElm = styled.div`
	display: flex;
	line-height: var(--line-height);
	border-bottom: 1px solid var(--primary-borders);
	margin: 1rem;

	@media print  {
		border-width: 2px;
	}

	.text {
		font-size: calc(1.25em * var(--size-multiplier));
		color: var(--title-color);
		padding-left: 0.75rem;
	}

	input {
		display: block;
		width: -webkit-fill-available;
		padding-left: 0.75rem;
		background-color: transparent;
		border: 0;
		line-height: var(--line-height);
		color: var(--primary-color);
	}
`;

function TopComment({children}) {
	return html`
		<${TopCommentElm}>
			<div class="text">${children}</div>
			<input type="text" />
		</${TopCommentElm}>
	`;
}

function HaikuDiary({ children }) {
	return html`
		<${HaikuDiaryElm}>
			<${TodoGroupTitleElm}>Haiku diary</${TodoGroupTitleElm}>
			${children}
		</${HaikuDiaryElm}>
	`;
}

export function Daily({ ...props }) {
	const group1 = Array.apply(null, Array(5)).map(i => { return ({ label: '' }) })
	const group3 = Array.apply(null, Array(13)).map(i => { return ({ label: '' }) })

	console.log(group1)

	const group2 = [
		{ label: 'Food' },
		{ label: 'Meds' },
		{ label: 'Vita + Husk + Nail' },
		{ label: 'Sleep test' },
		{ label: 'Read' },
		{ label: 'Plan tomorrow' },
		{ label: 'Note bedtime' },
		{ label: 'Study' },
		{ label: 'Flash cards' },
		{ label: 'Haiku diary' },
		{ label: 'Plant care' },
		{ label: 'Review notes' },
		{ label: 'Notes' },
	];

	return html`
			<${LayoutElm}>
				<${TodoColumn}>
					<${TopComment}>Day:</${TopComment}>

					<${TodoGroupElm}>
						<${TodoGroupTitleElm}>Have to-do</${TodoGroupTitleElm}>
						${group1.map(i => html`<${TodoRow}>${i.label}</${TodoRow}>`)}
					</${TodoGroupElm}>

					<${HaikuDiary}>
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
					</${HaikuDiary}>
				</${TodoColumn}>

				<${TodoColumn}>
					<${TopComment}>Up/Bed:</${TopComment}>

					<${TodoGroupElm}>
						<${TodoGroupTitleElm}>Dailies</${TodoGroupTitleElm}>
						${group2.map(i => html`<${TodoRow}>${i.label}</${TodoRow}>`)}
					</${TodoGroupElm}>
				</${TodoColumn}>

				<${TodoColumn}>
					<${TopComment}></${TopComment}>

					<${TodoGroupElm}>
						<${TodoGroupTitleElm}>Nice to-do</${TodoGroupTitleElm}>
						${group3.map(i => html`<${TodoRow}>${i.label}</${TodoRow}>`)}
					</${TodoGroupElm}>
				</${TodoColumn}>
			</${LayoutElm}>
	`
}