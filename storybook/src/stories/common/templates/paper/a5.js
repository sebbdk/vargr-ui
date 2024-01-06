import { createGlobalStyle } from "styled-components";

export const UseA5PaperPrintStyles = createGlobalStyle`
	@media print  {
		@page {
			size: a5 landscape
			width: 297mm !important;
			height: 209mm !important;
			margin: 0;
		}

		/*
		html {
			background-color: grey;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
		}
		*/


		body {
			width: 297mm !important;
			height: 209mm !important;

			background-color: #fff;
			margin: auto;

			box-sizing: content-box;
			//border: 1px solid red;
		}
	}
`;
