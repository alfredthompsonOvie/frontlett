import Section from "../../Section";
import Title from "../../Title";
import Cta from "../../Cta";
import Image from "next/image";
import styled from "styled-components";

const Cards = styled.section`
	text-align: left;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1em;
	margin: 3em 0;
`;
const Card = styled.section`
	background-color: #fff;
	border-radius: 0.4em;
	padding: 1em;
	display: flex;
	flex-direction: column;
	gap: 1.5em;
	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	li h1 {
		color: #8e8e8e;
		margin-bottom: 1em;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 1.2em;
	}
`;
function EquityJobs() {
	return (
		<Section $mode="equity">
			<header>
				<Title text="Equity Jobs" />
				<p>
					See companies and startups offering equity or a mix of cash and equity
					for very important position in their company
				</p>
			</header>
			<Cards>
				<Card>
					<Image
						src="/images/logos/logo21.svg"
						alt="skimake logo"
						width={120}
						height={60}
					/>
					<p>This company is a SAAS Startup that builds AI copy generator...</p>
					<h1>Chief Executive Officer</h1>
					<ul>
						<li>
							<section>
								<h1>Location</h1>
								<p>Abuja, Nigeria</p>
							</section>
							<section>
								<h1>INDUSTRY</h1>
								<p>On-demand print</p>
							</section>
						</li>
						<li>
							<section>
								<h1>EQUITY</h1>
								<p>1.2%</p>
							</section>
							<section>
								<h1>STIPEND</h1>
								<p>NGN 200,000/mth</p>
							</section>
						</li>
						<li>
							<section>
								<h1>DEADLINE</h1>
								<p>24th, January 2024</p>
							</section>
							<section>
								<h1>ROLE TYPE</h1>
								<p>Full-time</p>
							</section>
						</li>
					</ul>
					<Cta href="#" mode="linkCta">
						View Details
					</Cta>
				</Card>
				<Card >
					<Image
						src="/images/logos/logo27.svg"
						alt="skimake logo"
						width={120}
						height={60}
					/>
					<p>This company is a SAAS Startup that builds AI copy generator...</p>
					<h1>UX Strategist</h1>
					<ul>
						<li>
							<section>
								<h1>Location</h1>
								<p>Abuja, Nigeria</p>
							</section>
							<section>
								<h1>INDUSTRY</h1>
								<p>E-commerce</p>
							</section>
						</li>
						<li>
							<section>
								<h1>EQUITY</h1>
								<p>1.2%</p>
							</section>
							<section>
								<h1>STIPEND</h1>
								<p>NGN 200,000/mth</p>
							</section>
						</li>
						<li>
							<section>
								<h1>DEADLINE</h1>
								<p>24th, January 2024</p>
							</section>
							<section>
								<h1>ROLE TYPE</h1>
								<p>Full-time</p>
							</section>
						</li>
					</ul>
					<Cta href="#" mode="linkCta">
						View Details
					</Cta>
				</Card>
				<Card >
					<Image
						src="/images/logos/logo22.svg"
						alt="skimake logo"
						width={120}
						height={60}
					/>
					<p>This company is a SAAS Startup that builds AI copy generator...</p>
					<h1>CTO & Head of innovations</h1>
					<ul>
						<li>
							<section>
								<h1>Location</h1>
								<p>Abuja, Nigeria</p>
							</section>
							<section>
								<h1>INDUSTRY</h1>
								<p>Fintech</p>
							</section>
						</li>
						<li>
							<section>
								<h1>EQUITY</h1>
								<p>1.2%</p>
							</section>
							<section>
								<h1>STIPEND</h1>
								<p>NGN 200,000/mth</p>
							</section>
						</li>
						<li>
							<section>
								<h1>DEADLINE</h1>
								<p>24th, January 2024</p>
							</section>
							<section>
								<h1>ROLE TYPE</h1>
								<p>Full-time</p>
							</section>
						</li>
					</ul>
					<Cta href="#" mode="linkCta">
						View Details
					</Cta>
				</Card>
				<Card>
					<Image
						src="/images/logos/logo29.svg"
						alt="skimake logo"
						width={120}
						height={60}
					/>
					<p>This company is a SAAS Startup that builds AI copy generator...</p>
					<h1>Backend Developer</h1>
					<ul>
						<li>
							<section>
								<h1>Location</h1>
								<p>Abuja, Nigeria</p>
							</section>
							<section>
								<h1>INDUSTRY</h1>
								<p>Transport</p>
							</section>
						</li>
						<li>
							<section>
								<h1>EQUITY</h1>
								<p>1.2%</p>
							</section>
							<section>
								<h1>STIPEND</h1>
								<p>NGN 200,000/mth</p>
							</section>
						</li>
						<li>
							<section>
								<h1>DEADLINE</h1>
								<p>24th, January 2024</p>
							</section>
							<section>
								<h1>ROLE TYPE</h1>
								<p>Full-time</p>
							</section>
						</li>
					</ul>
					<Cta href="#" mode="linkCta">
						View Details
					</Cta>
				</Card>
			</Cards>
			<Cta href="#" mode="linkAlt">
				<span>See More Equity Jobs</span>
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

export default EquityJobs;
