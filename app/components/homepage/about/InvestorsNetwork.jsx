import Section from "../../Section";
import Title from "../../Title";
import Cta from "../../Cta";
import Image from "next/image";
import styled from "styled-components";

const Span = styled.span`
	font-weight: bold;
`;
const ListContainer = styled.section`
	text-align: left;
	border-top: 1px solid #a4a4a4;
	border-bottom: 1px solid #a4a4a4;
	margin: 3em 0;
`;
const InvestorList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1em;

	& > li {
		border-top: 1px solid #a4a4a4;
		display: flex;
	}
	& > li:first-of-type {
		border-top: 0;
	}

	@media (min-width: 635px) and (max-width: 1257px){
		& > li {
      border: 0;
    }
    & > li:first-of-type {
      border-top: 0;
      border-left: 0;
      display: flex;
    }
	}
	@media (min-width: 1258px) {
		& > li {
			border-top: 0;
			border-left: 1px solid #a4a4a4;
			display: flex;
		}
		& > li:first-of-type {
			border-top: 0;
			border-left: 0;
			display: flex;
		}
	}
`;
const ListItemCta = styled.li`
	background-color: var(--accent);
	color: #fff;
	height: 100%;
	padding: 1em;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1em;
`;
const DealItem = styled.li`
	padding: 1em;

	@media (min-width: 1200px) {
		li {
			/* border-left: 1px solid #a4a4a4; */
			border-top: none;
			/* background-color: red; */
		}
		li:nth-of-type(1) {
			border-left: none;
			border-top: none;
		}
	}
`;
function InvestorsNetwork() {
	return (
		<Section>
			<header>
				<Title text="SINC Investors Network" />
				<p>
					Our deals are structured not just to take in investments but to
					onboard owners passionate about our solutions. Our portfolio companies
					are valued at $50k at start, with these low valuation, you are
					guaranteed at least 2x-5x, usually been the first to invest.
				</p>
				<p>
					<Span>Disclaimer:</Span> These deal flows is a statement of our
					projections and may differ from stage to stage and from venture to
					venture and the guarantee is for deal 1, usually the first to invest
				</p>
			</header>
			<section>
				<Title
					text="Micro Angel Investors & Service incubators"
					subText="(Invest from $500 & above)"
					mode="investor"
				/>
				<ListContainer>
					<InvestorList>
						<DealItem>
							<section>
								<Title text="Deal 1" mode="small" />
								<ul>
									<li>
										<span> ✓ </span>Idea Stage: <span>$5k for 5% Equity</span>
									</li>
									<li>
										<span> ✓ </span> Expected Revenue at This Stage:{" "}
										<span>$0/mth </span>
									</li>
									<li>
										<span> ✓ </span> Duration of Raise: <span>1mth</span>
									</li>
									<li>
										<span> ✓ </span> Who Can Invest:{" "}
										<span>People with Domain Expertise and Advisors</span>
									</li>
								</ul>
							</section>
						</DealItem>
						<DealItem>
							<section>
								<Title text="Deal 2" mode="small" />

								<ul>
									<li>
										<span> ✓ </span>Build Stage:{" "}
										<span>$25k worth of service for 10% Equity</span>
									</li>
									<li>
										<span> ✓ </span> Expected Revenue at This Stage:
										<span> $100+/mth</span>
									</li>
									<li>
										<span> ✓ </span> Duration of Raise: <span> 1-3mths</span>
									</li>
									<li>
										<span> ✓ </span> Who Can Invest:{" "}
										<span>Developers, Engineers, Growth Marketers</span>
									</li>
								</ul>
							</section>
						</DealItem>
						<DealItem>
							<section>
								<Title text="Deal 3" mode="small" />

								<ul>
									<li>
										<span> ✓ </span>Validation Stage:{" "}
										<span>$50k for 5% Equity</span>
									</li>
									<li>
										<span> ✓ </span> Expected Revenue at This Stage:
										<span> $1k+/mth</span>
									</li>
									<li>
										<span> ✓ </span> Duration of Raise: <span> 3-6mths</span>
									</li>
									<li>
										<span> ✓ </span> Who Can Invest: <span>Everyone</span>
									</li>
								</ul>
							</section>
						</DealItem>
						<DealItem>
							<section>
								<Title text="Deal 4" mode="small" />

								<ul>
									<li>
										<span> ✓ </span>Traction Stage:
										<span>$125k worth of service for 5% Equity </span>
									</li>
									<li>
										<span> ✓ </span> Expected Revenue at This Stage:
										<span> $5k+/mth</span>
									</li>
									<li>
										<span> ✓ </span> Duration of Raise: <span> 6-12mths </span>
									</li>
									<li>
										<span> ✓ </span> Who Can Invest:{" "}
										<span>Media, Influencers, Celebrity, Platform Owners</span>
									</li>
								</ul>
							</section>
						</DealItem>
					</InvestorList>
				</ListContainer>

				<Title
					text="Angel Investors & Venture Capital"
					subText="(Invest from $50k & above)"
					mode="investor"
				/>
				<ListContainer>
					<InvestorList>
						<DealItem>
							<section>
								<Title text="Deal 5" mode="small" />

								<ul>
									<li>
										<span> ✓ </span>Pre-seed Stage:{" "}
										<span>$1.5M for 10% Equity</span>
									</li>
									<li>
										<span> ✓ </span> Expected Revenue at This Stage:{" "}
										<span>$50k+/mth </span>
									</li>
									<li>
										<span> ✓ </span> Duration of Raise: <span> 6-18mths</span>
									</li>
									<li>
										<span> ✓ </span> Who Can Invest:{" "}
										<span>Angel Investors, VCs, PE, Institutions</span>
									</li>
								</ul>
							</section>
						</DealItem>
						<DealItem>
							<section>
								<Title text="Deal 6" mode="small" />

								<ul>
									<li>
										<span> ✓ </span>Seed Stage:{" "}
										<span>$7.5M for 20% Equity</span>
									</li>
									<li>
										<span> ✓ </span> Expected Revenue at This Stage:
										<span> $250k+/mth </span>
									</li>
									<li>
										<span> ✓ </span> Duration of Raise: <span> 12-24mths </span>
									</li>
									<li>
										<span> ✓ </span> Who Can Invest:{" "}
										<span>VCs, PE, Institutions</span>
									</li>
								</ul>
							</section>
						</DealItem>
						<DealItem>
							<section>
								<Title text="Deal 7" mode="small" />

								<ul>
									✓ Stage: ✓ Expected Revenue at This Stage: ✓ Duration of
									Raise: ✓ Who Can Invest: 
									<li>
										<span> ✓ </span>IPO Stage: <span>$1.5B for 20% Equity</span>
									</li>
									<li>
										<span> ✓ </span> Expected Revenue at This Stage:
										<span> $1M+/mth</span>
									</li>
									<li>
										<span> ✓ </span> Duration of Raise: <span> 18-36mths</span>
									</li>
									<li>
										<span> ✓ </span> Who Can Invest: <span>The Public</span>
									</li>
								</ul>
							</section>
						</DealItem>
						<DealItem>
							<ul>
								<ListItemCta>
									<p>
										{" "}
										Work with Service Incubators (SINC) to expedite your
										time to market
									</p>
									<Cta href="#" mode="linkSec">
										Join SINC Network
									</Cta>
								</ListItemCta>
							</ul>
						</DealItem>
					</InvestorList>
				</ListContainer>
			</section>
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

export default InvestorsNetwork;
