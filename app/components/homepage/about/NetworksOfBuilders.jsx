import styled from "styled-components";
import Card from "../../Card";
import Cta from "../../Cta";
import Section from "../../Section";
import Title from "../../Title";
import Image from "next/image";

const Profile = styled.footer`
	margin-top: 1em;

	h2 {
		font-size: 1rem;
	}
	p {
		color: var(--text-alt);
	}
`;

const SectionContainer = styled.section`
	margin-inline: auto;
	max-width: 850px;
`;
const Bold = styled.section`
	font-weight: bold;
`;

const NetworkCardContainer = styled.section`
	display: grid;
	gap: 1em;
	text-align: left;

	@media (min-width: 350px) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1em;
		text-align: left;
	}
`;
function NetworksOfBuilders() {
	return (
		<Section>
			<Card mode="quote">
				<p>
					<q>
						Nigeria and Africa has a massive network effect that have not be
						fully utilized. With Nigerians/Africans in every country and
						territory of the world, we can scale an African business to 100+
						countries in few weeks
					</q>
				</p>
				<Profile>
					<h2>Daniel Izeghs Oratokhai </h2>
					<p>Managing Partner at SINC Partners Ltd</p>
				</Profile>
			</Card>
			<SectionContainer>
				<Title text="Network of builders helping startup scale" />
				<NetworkCardContainer>
					<Card mode="networkCard">
            <Title text="Work with Service Incubators to expedite your time-to-market" mode="cardTitle"/>
						<p>
							Collaborate with our meticulously chosen service partners, each
							with a vested interest, ensuring a shared commitment to success in
							the game of venture building.
						</p>
						<Bold >
							For 7.5% equity, you get a product manager, product designer,
							frontend engineer, software engineer and growth marketer to build
							the MVP of your app or web application and validate it.
						</Bold>

						<Cta href="#" mode="link">
							<span>Learn More</span>
							<Image
								src="/images/arrow.svg"
								alt="arrow icon"
								width={15}
								height={15}
							/>
						</Cta>
					</Card>
					<Card mode="networkCard">
						<Title text="Access funding after your mvp is validated" mode="cardTitle" />
						<p>
							Startups that have built and validated their product can take
							advantage of the financial resources of the SINC Investors
							Network, elevating their potential for success in the venture
							capital landscape.
						</p>
						<Bold>
							Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12
							months
						</Bold>

						<Cta href="#" mode="link">
							<span>Learn More</span>
							<Image
								src="/images/arrow.svg"
								alt="arrow icon"
								width={15}
								height={15}
							/>
						</Cta>
					</Card>
				</NetworkCardContainer>
			</SectionContainer>
		</Section>
	);
}

export default NetworksOfBuilders;
