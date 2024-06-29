import styled from "styled-components";
import Section from "../../Section";
import Title from "../../Title";
import Cta from "../../Cta";
import Image from "next/image";

const Sponsors = styled.section`
	max-width: 900px;
	width: 100%;
	margin: 3em auto;
`;
const CompanyList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
	gap: 1.5em;

	li {
		padding: 0.1em 0.4em;
		background-color: #fff;
		border-radius: 0.3em;
    display: flex;
    justify-content: center;
    align-items: center;
	}
`;

function StudioPortfolio({companies}) {
	return (
		<Section>
			<header>
				<Title text="Our Studio Portfolio" />
				<p>Our 2024 Service Incubator Portfolio Companies</p>
			</header>
			<Sponsors>
				<CompanyList >
					{companies.map((logo) => (
						<li key={logo}>
							<Image
								src={`/images/logos/${logo}`}
								alt={logo}
								width={50}
								height={50}
							/>
						</li>
					))}
				</CompanyList>
			</Sponsors>

			<Cta href="#" mode="linkAlt">
				<span>View All Companies</span>
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

export default StudioPortfolio;
