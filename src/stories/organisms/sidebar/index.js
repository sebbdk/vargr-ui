import { html } from "htm/preact";
import styled from "styled-components";

const SidebarElm = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rgba(0,0,0, 0.8);
	padding: 1em;
	text-align: left;
`;

const NameTitleElm = styled.h2`
	display: block;
	font-size: 2em;
	margin: 0;
	font-weight: bold;
`;

const SubTitleElm = styled.p`
	margin: 0.5em 0;
`;

const PictureFrameElm = styled.img`
	border-radius: 0.25rem;
	box-shadow: 0 0 10px rgb(0 0 0 / 20%);
	max-width: 10em;
	margin-bottom: 1em;
	margin-top: 1em;
`;

const ContactsElm = styled.div`
	text-align: left;
	margin-bottom: 1em;
`;

export const Sidebar = ({ title, subTitle, imageSrc, email, telephone, linkedinLink, children }) => {
	return html`
		<${SidebarElm}>
			<${NameTitleElm}>${title}</${NameTitleElm}>
			<${SubTitleElm}>${subTitle}</${SubTitleElm}>
			<${PictureFrameElm} src=${imageSrc}></${PictureFrameElm}>

			<${ContactsElm}>
				<b>Contact me here:</b><br />
				E-mail: ${email}<br />
				Tlf: ${telephone}<br />
				<a target="_blank" href="${linkedinLink}">LinkedIn</a>
			</${ContactsElm}>

			${children}
		</${SidebarElm}>
	`;
  };