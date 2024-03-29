import { html } from "htm/preact";
import { useState } from "react";
import styled from "styled-components";


const PickerOptionElm = styled.div`
	background-color: rgba(0,0,0, 0.25);
	height: 1em;
	line-height: 1em;
	padding: 0.5em;
	color: #fff;
	border-bottom: 0.0125em solid rgba(0,0,0, 0.2);
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	cursor: pointer;
	user-select: none;

	&:last-of-type {
		border-bottom: none;
		overflow: hidden;
	}

	&:hover {
		background-color: rgba(0,0,0, 0.5);
	}

	${({ selected }) => selected && `
		background-color: rgba(0,0,0, 0.5);
	`}
`;

const PickerContainerElm = styled.div`
	border-radius: 0.25em;
	overflow: hidden;
	border: 0.0125em solid transparent;
`;

const PickerElm = styled.div`
	border-radius: 0.25em;
	overflow: visible;
	height: 2em;

	${PickerOptionElm} {
		visibility: hidden;
	}

	${PickerOptionElm}:first-of-type {
		visibility: visible;
		border-radius: 0.25em;
	}

	${({ isOpen }) => isOpen && `
		${PickerOptionElm} {
			visibility: visible;
		}

		${PickerOptionElm}:first-of-type {
			visibility: visible;
			border-radius: 0;
		}

		${PickerContainerElm} {
			box-shadow: 0 0em 0.25em rgba(0, 0, 0, 0.5);
			border: 0.0125em solid #666;
		}
	`}
`;

export const PickerOption = ({ children, selected, onClick }) => {
	return html`
		<${PickerOptionElm} selected=${selected} onClick=${onClick}>
			${children}
		</${PickerOptionElm}>
	`;
}

export const ListPicker = ({ options = [ { label: 'no options', value: 0 } ], inputSelection, onChange }) => {
	const [ isOpen, setIsOpen ]= useState( false );
	const [ selection, setSelection ]= useState( inputSelection || options[0].value );

	const selectedOption = options.find(opt => opt.value === selection);
	const unselectedOptions = options.filter(opt => opt.value !== selection);

	const optionElms = unselectedOptions.map(opt => {
		const select = () => {
			setSelection(opt.value);
			setIsOpen(false);
			onChange(opt.value);
		}

		return html`
			<${PickerOption} selected=${(opt.value === selection)} onClick=${() => select()}>
				${opt.label}
			</${PickerOption}>
		`
	});

	const selectedOptionElm = html`<${PickerOption} onClick=${() => setIsOpen(!isOpen)} selected=${true}>${selectedOption.label}</${PickerOption}>`;

  	return html`
		<${PickerElm} isOpen=${isOpen}>
			<${PickerContainerElm}>
				${selectedOptionElm}
				${optionElms}
			</${PickerContainerElm}>
		</${PickerElm}>
  	`;
};
