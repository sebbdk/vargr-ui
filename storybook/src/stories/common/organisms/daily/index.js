import { html } from "htm/preact"
import styled from "styled-components";
import { TodoRow, TodoRowElm } from './todo_row';

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
			border-bottom: 2px dotted var(--muted-borders);
		}
	}
`;

const TodoColumn = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	width: 33.3%;
`;

const TodoGroupTitleElm = styled.div`
	border-bottom: 1px solid var(--primary-borders);
	padding: 0.5rem 0rem;
	font-size: calc(1.25em * var(--size-multiplier));

	@media print  {
		border-width: var(--primary-line-thicc);
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
	--line-height: 2rem;
	--checkbox-background-color: rgba(177,177,177);
	--checkbox-background-color-active: rgba(230, 230, 230);
	--title-color: var(--primary-color);
	--primary-line-thicc: 1px;

	@media print  {
		--primary-line-thicc: 2px;
		--title-color: rgba(0,0,0, 0.5);
		--size-multiplier: 1.25;
		--line-height: 2rem;
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
		background-color: transparent;
		border: 0;
		border-bottom: var(--primary-line-thicc) dotted var(--primary-borders);
		line-height: var(--line-height);
		color: var(--primary-color)

		height: var(--line-height);
		padding: 0;
		box-sizing: border-box;
		padding-left: 0.75rem;
	}

	input:last-of-type {
		border-bottom: 0;
	}

	@media print  {
		border: 0;

		input:last-of-type {
			border-bottom: var(--primary-line-thicc) dotted var(--primary-borders);
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
		font-size: 1.5em;
		color: var(--title-color);
		flex-shrink: 0;
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
	const group3 = Array.apply(null, Array(16)).map(i => { return ({ label: '' }) })

	const group2 = [
		{ label: 'Food', multiCheck: 3 },
		{ label: 'Meds', multiCheck: 2},
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
		{ label: '' },
		{ label: '' },
		{ label: '' },
	];

	return html`
		<${LayoutElm}>
			<${TodoColumn}>
				<${TopComment}>Day (2024):</${TopComment}>

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
					${group2.map(i => html`<${TodoRow} multiCheck=${i.multiCheck}>${i.label}</${TodoRow}>`)}
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