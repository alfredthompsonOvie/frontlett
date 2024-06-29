import Section from "../../Section";
import Title from "../../Title";
import Cta from "../../Cta";
import Image from "next/image";
import styled from "styled-components";

const Links = styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1em;
	align-items: center;
	margin-top: 2em;

	a {
		padding: 0.75em 2em;
		border: 1px solid;
		border-radius: 3em;
	}
`;

function CallToAction() {
	return (
		<Section mode="styles.conactUs">
			<Title
				text="Let's build companies that help everyone succeed"
				mode="conactUs"
			/>
			<Links>
				<Cta href="/">SINC With Us</Cta>
				<Cta href="/" mode="cta">
					Apply to SIP 1.0
				</Cta>
			</Links>
		</Section>
	);
}

export default CallToAction;
