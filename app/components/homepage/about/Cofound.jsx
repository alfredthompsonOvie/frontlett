import Section from "../../Section";
import Title from "../../Title";
import Cta from "../../Cta";
import Card from "../../Card";
import Image from "next/image";
import styled from "styled-components";

const CardContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1em;
	margin: 3em 0;
`;
function Cofound() {
	return (
		<Section $mode="cofound">
			<header>
				<Title text="Co-found With Us" />
				<p>
					We seek to collaborate with visionary individuals who are solving
					similar problems of helping entrepreneurs succeed
				</p>
			</header>

			<CardContainer>
				<Card mode="cofound" bg="#000">
					<span>1</span>
					<h1>We Ideate</h1>
					<p>
						We internally generate concepts and ideas that help solve problems
						in our thesis areas, after which we proceed to develop a nano/micro
						MVP (usually having as low as 30 functions to as high as 100
						functions) of the product that we take to the market.
					</p>
				</Card>
				<Card mode="cofound" bg="#f47733">
					<span>2</span>
					<h1>you validate</h1>
					<p>
						You join our 3 months inResidence program as a business expert to
						run the operations or as a technical expert to further the
						development and validate the idea with an average monthly revenue of
						$1k or 10,000 users and/or an MVP of at least 150 functions
					</p>
				</Card>
				<Card mode="cofound" bg="#ff78bf">
					<span>3</span>
					<h1>You Co-own</h1>
					<p>
						After successful validation and demo day at the end of the EIR
						program, we move those with perfect fit to become co-founders of the
						product they validated as CEO & CTO, each owning 20% of the venture.
					</p>
				</Card>
			</CardContainer>
			<Cta href="#" mode="linkAlt">
				<span>Build your team</span>
				<Image
					src="/images/arrow.svg"
					alt="arrow icon"
					width={15}
					height={15}
				/>
			</Cta>
		</Section>
	);
}

export default Cofound;
