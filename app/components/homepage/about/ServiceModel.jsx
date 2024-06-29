import styled from "styled-components";
import Section from "../../Section";
import Title from "../../Title";
import Cta from "../../Cta";
import Image from "next/image";

const Model = styled.section`
	header {
		margin: 2.8em 0;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: underline;
		font-weight: bold;
	}
	h1,
	p {
		text-align: left;
    margin: 0 !important;
	}
`;
const ModelList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1em;
	.service__model__list {
	}
	li {
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding: 1em;
		background-color: #fff;
		border-radius: 0.5em;
	}
`;
const CaseStudy = styled.ul`
	margin: 2em 0;
`;

const StudyList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	gap: 1em;
	margin: 2em 0;

	li {
		background-color: #fff;
		padding: 0.6em 2em;
		border-radius: 5em;
		border: 1px solid;
	}
	@media (min-width: 584px) {
		li {
			width: initial;
		}
	}
`;
function ServiceModel() {
	return (
		<Section $mode="service">
			<header>
				<Title text="Our Service Incubation Model" />
				<p>
					The Service Incubation model is an alternate funding model for startup
					that allows professionals to offer their services to startups in
					return for a minute equity (usually between 0.5% to 1.5%) in the
					startup. As a service incubator, you will see your share grow as much
					as 1000% in 12 – 24 months as been first to invest.
				</p>
			</header>
			<Model>
				<header>
					<Title text="Hypothesis" mode="small" />

					<p>
						Just a few reasons we know its time for this model
						within the ecosystem
					</p>
				</header>
				<ModelList >
					<li>
						<Image
							src="/images/triangle.svg"
							alt="triangle icon"
							width={30}
							height={30}
						/>
						<p>
							Most early-stage companies and pre-product startups cannot afford
							professional services especially those who don’t have family and
							friends’ network that can support
						</p>
					</li>
					<li>
						<Image
							src="/images/diamond.svg"
							alt="diamond icon"
							width={30}
							height={30}
						/>
						<p>
							If startups can seed 5-10% in equity to incubators for $20k to
							$200k funding most times, they will be willing to seed 10% equity
							for a $25k service investment
						</p>
					</li>
					<li>
						<Image
							src="/images/polygon.svg"
							alt="polygon icon"
							width={30}
							height={30}
						/>
						<p>
							Young professionals who don’t have a lot of money to invest nor an
							accredited investors will have opportunities to take equity at the
							early stage of their career, usually been the first to invest and
							almost guaranteed of return
						</p>
					</li>
				</ModelList>
				<CaseStudy>
					<Title text="Case Study" mode="small" />
					<p>
						See what Service Incubators get, the maths behind Service Equity
						(SEEQ) and what the value of your share equity can be over time
					</p>
					<StudyList >
						<li>Service Incubator Equity</li>
						<li>SEEQ Maths Equation</li>
						<li>Value of my Equity Over Time</li>
					</StudyList>
				</CaseStudy>
				<Cta href="#" mode="link">
					<span>Become A Service Incubator</span>
					<Image
						src="/images/arrow.svg"
						alt="arrow icon"
						width={15}
						height={15}
					/>
				</Cta>
			</Model>
		</Section>
	);
}

export default ServiceModel;
