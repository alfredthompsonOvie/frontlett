import Link from "next/link";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
	${(props) => {
		switch (props.$mode) {
			case "link":
				return css`
					display: flex;
					align-items: center;
					gap: 0.5em;
					text-decoration: underline;
				`;
			case "linkAlt":
				return css`
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 0.5em;
					text-decoration: underline;
				`;
			case "linkSec":
				return css`
					background-color: #303030;
					padding: 1em;
					border-radius: 3em;
					display: block;
					text-align: center;
				`;
			case "linkCta":
				return css`
					background-color: var(--accent);
					color: #fff;
					padding: 1em 2em;
					border-radius: 3em;
					display: inline-block;
					text-align: center;
					align-self: start;
				`;
			case "cta":
				return css`
					background-color: #000;
					color: #fff;
				`;
			case "secondary":
				return css`
					grid-column: 2;
					text-align: center;
					display: block;
					margin-top: 3em;
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 0.5em;
					text-decoration: underline;
				`;
			default:
				return css`
					/* background-color: #fff; */
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 0.5em;
				`;
		}
	}}
`;
function Cta({ href = "#", mode, children }) {
	return (
		<StyledLink href={href} $mode={mode}>
			{children}
		</StyledLink>
	);
}

export default Cta;
