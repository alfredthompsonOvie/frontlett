import styled, { css } from "styled-components";

const StyledTitle = styled.h1`
	span {
		font-weight: normal;
	}
	${(props) => {
		switch (props.$mode) {
			case "subtitle":
				return css`
					font-size: clamp(1.125rem, 8vw, 2rem);
					margin-bottom: 0.5em;
				`;
			case "small":
				return css`
					font-size: 1.25rem;
				`;
			case "cardTitle":
				return css`
					font-size: 1.25rem;
				`;
			case "investor":
				return css`
					font-size: 1.25rem;
					margin: 1em auto;	
					@media (min-width: 1200px) {
						text-align: left;
					}
				`;
			case "blogsTitle":
				return css`
					font-size: 1.2rem;
					
				`;
			case "contactUs":
				return css`
					font-size: clamp(1rem, 10vw, 3rem);
					
				`;
			default:
				return css`
					font-size: clamp(1.25rem, 8vw, 3.5rem);
					margin: 0.5em auto;
					line-height: 1.2;
				`;
		}
	}}
`;
function Title({ text, subText, mode }) {
	return (
		<StyledTitle $mode={mode}>
			{text} <span>{subText}</span>
		</StyledTitle>
	);
}

export default Title;
