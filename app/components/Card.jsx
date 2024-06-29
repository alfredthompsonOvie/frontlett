import Link from "next/link";
import styled from "styled-components";
import css from "styled-jsx/css";

const StyledCard = styled.section`
	${(props) => {
		switch (props.$mode) {
			case "quote":
				return css`
					background-color: #fff;
					max-width: 650px;
					margin-inline: auto;
					padding: 1.5em 2em;
					border-radius: 2em;
					height: initial;
					line-height: 1.5;
				`;
			case "networkCard":
				return css`
					padding: 1.2em;
					border-radius: 1em;
					background-color: #fff;
					min-height: 17em;
					display: flex;
					flex-direction: column;
					gap: 1.2em;

					a {
						margin-top: auto;
					}
          
					h1 {
						font-size: 1.2rem;
					}
				`;
			case "cofound":
				return css`
				text-align: left;
				display: flex;
				flex-direction: column;
				gap: 1em;
				background-color: #fff;
				padding: 1em;
				border-radius: 0.8em;
  
			span {
				width: 3em;
				height: 3em;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
      background-color: ${props.$bg};
        background-color: {props => props.$bg || ""};

			}
			/* :nth-child(1) span {
				background-color: #000;
			}
			&:nth-child(2) span {
				background-color: #f47733;
			}
			&:nth-child(3) span {
				background-color: #ff78bf;
			} */
				`;
			default:
				return css`
					background-color: #fff;
				`;
		}
	}}
`;
function Card({ mode, bg, children }) {
	return <StyledCard $mode={mode} $bg={bg} >{children}</StyledCard>;
}

export default Card;
