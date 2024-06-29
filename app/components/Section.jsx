import styled, { css } from "styled-components";

const Section = styled.section`
	grid-column: 2;
	margin: 3em 0 3em;
	text-align: center;

	header p {
		max-width: 650px;
		margin-inline: auto;
	}

	${(props) =>
		props.$mode === "mission" &&
		css`
			p {
				max-width: 600px;
				margin-inline: auto;
			}
			ul {
				color: #fff;
				text-align: left;
				margin-top: 4em;

				@media (min-width: 320px) {
					display: flex;
					flex-wrap: wrap;
				}
			}
			li {
				display: flex;
				flex-direction: column;
				gap: 1.5em;
				align-items: flex-start;
				padding: 1em;
				@media (min-width: 300px) {
					flex: 1;
					min-width: 200px;
				}
			}
			li:nth-child(1) {
				background-color: #000;
			}
			li:nth-child(2) {
				background-color: #f47733;
			}
			li:nth-child(3),
			li:nth-child(5) {
				background-color: #ff78bf;
			}
			li:nth-child(4) {
				background-color: #20888f;
			}
		`}

	${(props) =>
		props.$mode === "concept" &&
		css`
			p {
				max-width: 850px;
				margin-inline: auto;
			}
			ul {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
				gap: 1em;
				margin-top: 3em;
			}
			li {
				min-height: 9em;
				display: flex;
				flex-direction: column;
				gap: 1em;
				padding: 1em;
				background-color: #fff;
				border-radius: 0.5em;
			}
		`}
	${(props) =>
		props.$mode === "howItWorks" &&
		css`
			grid-column: 1/-1;
			display: grid;
			grid-template-columns: 1fr 10fr 1fr;

			header {
				grid-column: 2;
				text-align: center;
			}
		`}
	${(props) =>
		props.$mode === "investors" &&
		css`
			header {
				margin-bottom: 2.5em;
			}
			header span {
				font-weight: bold;
			}
			header p:nth-of-type(2) {
				margin-top: 1em;
			}
		`}
	${(props) =>
		props.$mode === "contactUs" &&
		css`
			grid-column: 2;
			text-align: center;
			max-width: 700px;
			margin: 3em auto 4em;
		`}
`;
export default Section;
