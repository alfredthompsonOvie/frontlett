import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import Link from "next/link";

const NUM_OF_COMPANIES = 40;
export default function Home() {
	const companies = Array.from({ length: NUM_OF_COMPANIES }).map(
		(item, idx) => `logo${idx + 1}.svg`
	);

	return (
		<main className={styles.main}>
			<section className={styles.hero}>
			<Hero />
				
			</section>
			{/* 2 */}
			<section className={`${styles.network} ${styles.section}`}>
				<section className={styles.network__card1}>
					<p>
						"Nigeria and Africa has a massive network effect that have not be
						fully utilized. With Nigerians/Africans in every country and
						territory of the world, we can scale an African business to 100+
						countries in few weeks"
					</p>
					<section className={styles.profile}>
						<h2>Daniel Izeghs Oratokhai</h2>
						<p>Managing Partner at SINC Partners Ltd</p>
					</section>
				</section>
				<section className={styles.section__container}>
					<h1 className={styles.section__title}>
						Network of builders helping startup scale
					</h1>
					<section className={styles.network__card__container}>
						<section className={styles.network__card}>
							<h1>
								Work with Service Incubators to expedite your time-to-market
							</h1>
							<p>
								Collaborate with our meticulously chosen service partners, each
								with a vested interest, ensuring a shared commitment to success
								in the game of venture building.
							</p>
							<p className={styles.network__card__desc}>
								For 7.5% equity, you get a product manager, product designer,
								frontend engineer, software engineer and growth marketer to
								build the MVP of your app or web application and validate it.
							</p>

							<Link href="#" className={styles.Link}>
								<span>Learn More</span>
								<Image
									src="/images/arrow.svg"
									alt="arrow icon"
									width={15}
									height={15}
								/>
							</Link>
						</section>
						<section className={styles.network__card}>
							<h1>Access funding after your mvp is validated</h1>
							<p>
								Startups that have built and validated their product can take
								advantage of the financial resources of the SINC Investors
								Network, elevating their potential for success in the venture
								capital landscape.
							</p>
							<p className={styles.network__card__desc}>
								Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12
								months
							</p>

							<Link href="#" className={styles.Link}>
								<span>Learn More</span>
								<Image
									src="/images/arrow.svg"
									alt="arrow icon"
									width={15}
									height={15}
								/>
							</Link>
						</section>
					</section>
				</section>
			</section>
			{/* 3 FOCUS: MISSION */}
			<section className={`${styles.mission} ${styles.section}`}>
				<header>
					<h1 className={styles.section__title}>Our Area of Focus</h1>
					<p>
						In our quest to help make success available to everyone, we have
						initial strategic direction to focus on these five (5) key areas at
						the lab
					</p>
				</header>
				<ul>
					<li>
						<span>01</span>
						<span>Business Support & Incubation</span>
					</li>
					<li>
						<span>02</span>
						<span>On-Demand & As-A-Service</span>
					</li>
					<li>
						<span>03</span>
						<span>Marketplace & Crowdsourcing</span>
					</li>
					<li>
						<span>04</span>
						<span>Aggregation & Shared Economy</span>
					</li>
					<li>
						<span>05</span>
						<span>Decentralized Economy & Digital Assets</span>
					</li>
				</ul>
			</section>
			{/* 4 CONCEPT */}
			<section className={`${styles.concept} ${styles.section}`}>
				<h1 className={styles.section__title}>Our Concept Innovations</h1>
				<p>
					We have proprietary concept innovations that will support the startup
					ecosystem, support solution-providers/entrepreneurs and ultimately
					help democratize success;
				</p>
				<ul>
					<li>
						<h1>Service Incubator</h1>
						<p>
							A service-for-shares model of incubating pre-product startups and
							early-stage companies by building their early stage product and
							MVP
						</p>
					</li>
					<li>
						<h1>Virtualting</h1>
						<p>
							A resource share model that allows companies share the time of
							resources (employees, consultants, technical advisers or
							influencers) while also splitting the service cost of the resource
						</p>
					</li>
					<li>
						<h1>Diiming</h1>
						<p>
							A progressive investment model that allows you to put aside income
							(disposable or non-disposable) as investment over a period towards
							an investment or spend of your choice 
						</p>
					</li>
				</ul>
			</section>
			{/* 5 SERVICE */}
			<section className={styles.service}>
				<header>
					<h1 className={styles.section__subtitle}>
						Our Service Incubation Model
					</h1>
					<p>
						The Service Incubation model is an alternate funding model for
						startup that allows professionals to offer their services to
						startups in return for a minute equity (usually between 0.5% to
						1.5%) in the startup. As a service incubator, you will see your
						share grow as much as 1000% in 12 – 24 months as been first to
						invest.
					</p>
				</header>
				<section className={styles.service__model}>
					<header>
						<h1 className={styles.section__subtitle__small}>Hypothesis</h1>
						<p>
							Just a few reasons we know its time for this model
							within the ecosystem
						</p>
					</header>
					<ul className={styles.service__model__list}>
						<li>
							<Image
								src="/images/triangle.svg"
								alt="triangle icon"
								width={30}
								height={30}
							/>
							<p>
								Most early-stage companies and pre-product startups cannot
								afford professional services especially those who don’t have
								family and friends’ network that can support
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
								$200k funding most times, they will be willing to seed 10%
								equity for a $25k service investment
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
								Young professionals who don’t have a lot of money to invest nor
								an accredited investors will have opportunities to take equity
								at the early stage of their career, usually been the first to
								invest and almost guaranteed of return
							</p>
						</li>
					</ul>
					<section className={styles.caseStudy}>
						<h1 className={styles.section__subtitle__small}>Case Study</h1>
						<p>
							See what Service Incubators get, the maths behind Service Equity
							(SEEQ) and what the value of your share equity can be over time
						</p>
						<ul className={styles.service__study__list}>
							<li>Service Incubator Equity</li>
							<li>SEEQ Maths Equation</li>
							<li>Value of my Equity Over Time</li>
						</ul>
					</section>
					<Link href="#" className={styles.Link}>
						<span>Become A Service Incubator</span>
						<Image
							src="/images/arrow.svg"
							alt="arrow icon"
							width={15}
							height={15}
						/>
					</Link>
				</section>
			</section>
			{/* 6 portfolio */}
			<section className={styles.section}>
				<header>
					<h1 className={styles.section__title}>Our Studio Portfolio</h1>
					<p>Our 2024 Service Incubator Portfolio Companies</p>
				</header>
				<section className={styles.sponsors}>
					<ul className={styles.companies__list}>
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
					</ul>
				</section>

				<Link href="#" className={styles.Link__alt}>
					<span>View All Companies</span>
					<Image
						src="/images/arrow.svg"
						alt="arrow icon"
						width={15}
						height={15}
					/>
				</Link>
			</section>

			{/* 7 Co-found With Us*/}
			<section className={`${styles.section} ${styles.cofound}`}>
				<h1 className={styles.section__title}>Co-found With Us</h1>
				<p>
					We seek to collaborate with visionary individuals who are solving
					similar problems of helping entrepreneurs succeed
				</p>
				<ul className={styles.cofound__list}>
					<li>
						<span>1</span>
						<h1>We Ideate</h1>
						<p>
							We internally generate concepts and ideas that help solve problems
							in our thesis areas, after which we proceed to develop a
							nano/micro MVP (usually having as low as 30 functions to as high
							as 100 functions) of the product that we take to the market.
						</p>
					</li>
					<li>
						<span>2</span>
						<h1>you validate</h1>
						<p>
							You join our 3 months inResidence program as a business expert to
							run the operations or as a technical expert to further the
							development and validate the idea with an average monthly revenue
							of $1k or 10,000 users and/or an MVP of at least 150 functions
						</p>
					</li>
					<li>
						<span>3</span>
						<h1>You Co-own</h1>
						<p>
							After successful validation and demo day at the end of the EIR
							program, we move those with perfect fit to become co-founders of
							the product they validated as CEO & CTO, each owning
							20% of the venture.
						</p>
					</li>
				</ul>
				<Link href="#" className={styles.Link__alt}>
					<span>Build your team</span>
					<Image
						src="/images/arrow.svg"
						alt="arrow icon"
						width={15}
						height={15}
					/>
				</Link>
			</section>
			{/* 8.  How It Works*/}
			{/* <section className={styles.section}>
        <h1 className={styles.section__title}>How It Works</h1>
        <p>
        Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.
        </p>
        <ul className={styles.cofound__list}>
          <li>
            <span>1</span>
            <h1>We Ideate</h1>
            <p>We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.</p>
          </li>
          <li>
            <span>2</span>
            <h1>you validate</h1>
            <p>
            You join our 3 months inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions
            </p>
          </li>
          <li>
            <span>3</span>
            <h1>You Co-own</h1>
            <p>
            After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.
            </p>
          </li>
        </ul>
        <Link href="#">
          <span>Build your team</span>
          <Image src="/images/arrow.svg" alt="arrow icon" width={15} height={15}/>
          </Link>
      </section> */}
			{/* 8.  SINC Investors Network*/}
			<section className={`${styles.section} ${styles.investors}`}>
				<header>
					<h1 className={styles.section__title}>SINC Investors Network</h1>
					<p>
						Our deals are structured not just to take in investments but to
						onboard owners passionate about our solutions. Our portfolio
						companies are valued at $50k at start, with these low valuation, you
						are guaranteed at least 2x-5x, usually been the first to invest.
					</p>
					<p>
						<span>Disclaimer:</span> These deal flows is a statement of our
						projections and may differ from stage to stage and from venture to
						venture and the guarantee is for deal 1, usually the first to invest
					</p>
				</header>
				<section className={styles.investors__container}>
					<section>
						<h1 className={styles.investors__title}>
							Micro Angel Investors & Service incubators{" "}
							<span>(Invest from $500 & above)</span>
						</h1>

						<ul className={styles.investor__list}>
							<li>
								<section>
									<h1>Deal 1</h1>
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
							</li>
							<li>
								<section>
									<h1>Deal 2</h1>
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
							</li>
							<li>
								<section>
									<h1>Deal 3</h1>
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
							</li>
							<li>
								<section>
									<h1>Deal 4</h1>
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
											<span> ✓ </span> Duration of Raise:{" "}
											<span> 6-12mths </span>
										</li>
										<li>
											<span> ✓ </span> Who Can Invest:{" "}
											<span>
												Media, Influencers, Celebrity, Platform Owners
											</span>
										</li>
									</ul>
								</section>
							</li>
						</ul>
					</section>
					<section>
						<h1 className={styles.investors__title}>
							Micro Angel Investors & Service incubators{" "}
							<span>(Invest from $500 & above)</span>
						</h1>

						<ul className={styles.investor__list}>
							<li>
								<section>
									<h1>Deal 5</h1>
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
							</li>
							<li>
								<section>
									<h1>Deal 6</h1>
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
											<span> ✓ </span> Duration of Raise:{" "}
											<span> 12-24mths </span>
										</li>
										<li>
											<span> ✓ </span> Who Can Invest:{" "}
											<span>VCs, PE, Institutions</span>
										</li>
									</ul>
								</section>
							</li>
							<li>
								<section>
									<h1>Deal 7</h1>
									<ul>
										✓ Stage: ✓ Expected Revenue at This Stage: ✓ Duration of
										Raise: ✓ Who Can Invest: 
										<li>
											<span> ✓ </span>IPO Stage:{" "}
											<span>$1.5B for 20% Equity</span>
										</li>
										<li>
											<span> ✓ </span> Expected Revenue at This Stage:
											<span> $1M+/mth</span>
										</li>
										<li>
											<span> ✓ </span> Duration of Raise:{" "}
											<span> 18-36mths</span>
										</li>
										<li>
											<span> ✓ </span> Who Can Invest: <span>The Public</span>
										</li>
									</ul>
								</section>
							</li>
							<li>
								<ul>
									<li className={styles.list__item__cta}>
										<p>
											{" "}
											Work with Service Incubators (SINC) to expedite your
											time to market
										</p>
										<Link href="#" className={styles.Link__sec}>
											Join SINC Network
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</section>
				</section>
				<Link href="#" className={styles.Link__alt}>
					<span>Build your team</span>
					<Image
						src="/images/arrow.svg"
						alt="arrow icon"
						width={15}
						height={15}
					/>
				</Link>
			</section>
			{/* 8.  Equity Jobs*/}
			<section className={`${styles.section} ${styles.equity}`}>
				<header>
					<h1 className={styles.section__title}>Equity Jobs</h1>
					<p>
						See companies and startups offering equity or a mix of cash and
						equity for very important position in their company
					</p>
				</header>
				<section className={styles.equity__cards}>
					<section className={styles.equity__card}>
						<Image
							src="/images/logos/logo21.svg"
							alt="skimake logo"
							width={120}
							height={60}
						/>
						<p>
							This company is a SAAS Startup that builds AI copy generator...
						</p>
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
						<Link href="#" className={styles.Link__cta}>
							View Details
						</Link>
					</section>
					<section className={styles.equity__card}>
						<Image
							src="/images/logos/logo27.svg"
							alt="skimake logo"
							width={120}
							height={60}
						/>
						<p>
							This company is a SAAS Startup that builds AI copy generator...
						</p>
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
						<Link href="#" className={styles.Link__cta}>
							View Details
						</Link>
					</section>
					<section className={styles.equity__card}>
						<Image
							src="/images/logos/logo22.svg"
							alt="skimake logo"
							width={120}
							height={60}
						/>
						<p>
							This company is a SAAS Startup that builds AI copy generator...
						</p>
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
						<Link href="#" className={styles.Link__cta}>
							View Details
						</Link>
					</section>
					<section className={styles.equity__card}>
						<Image
							src="/images/logos/logo29.svg"
							alt="skimake logo"
							width={120}
							height={60}
						/>
						<p>
							This company is a SAAS Startup that builds AI copy generator...
						</p>
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
						<Link href="#" className={styles.Link__cta}>
							View Details
						</Link>
					</section>
				</section>
				<Link href="#" className={styles.Link__alt}>
					<span>See More Equity Jobs</span>
					<Image
						src="/images/arrow.svg"
						alt="arrow icon"
						width={15}
						height={15}
					/>
				</Link>
			</section>
			{/* 8.  Blogs & Resources*/}
			<section className={`${styles.section} ${styles.blogs}`}>
				<header>
					<h1 className={styles.section__title}>Blogs & Resources</h1>
				</header>
				<section className={styles.resources}>
					<section>
					<Image
						src="/images/blog1.svg"
						alt="arrow icon"
						width={500}
						height={200}
					/>
					</section>
					<section>
						<Image
              src="/images/blog2.svg"
              alt="arrow icon"
              width={500}
              height={200}
            />
					</section>
					<section>
					<Image
						src="/images/blog2.svg"
						alt="arrow icon"
						width={500}
						height={200}
					/>
					</section>
				</section>
				<section className={styles.blogs__cards}>
					<section className={styles.blogs__card}>
						<section className={styles.blogs__card__details}>
							<h1 className={styles.blogs__card__title}>
								Top Ten Most Powerful Startup
							</h1>
							<p className={styles.blogs__card__description}>
								Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
								Top Ten Most Powerful Startup
							</p>
						</section>
							<section>
								<Image
									src="/images/blog11.svg"
									alt="arrow icon"
									width={50}
									height={50}
								/>
							</section>
					</section>
					<section className={styles.blogs__card}>
						<section className={styles.blogs__card__details}>
							<h1 className={styles.blogs__card__title}>
								Top Ten Most Powerful Startup
							</h1>
							<p className={styles.blogs__card__description}>
								Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
								Top Ten Most Powerful Startup
							</p>
						</section>
							<section>
								<Image
									src="/images/blog21.svg"
									alt="arrow icon"
									width={50}
									height={50}
								/>
							</section>
					</section>
					<section className={styles.blogs__card}>
						<section className={styles.blogs__card__details}>
							<h1 className={styles.blogs__card__title}>
								Top Ten Most Powerful Startup
							</h1>
							<p className={styles.blogs__card__description}>
								Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
								Top Ten Most Powerful Startup
							</p>
						</section>
							<section>
								<Image
									src="/images/blog31.svg"
									alt="arrow icon"
									width={50}
									height={50}
								/>
							</section>
					</section>
				</section>
				<Link href="#" className={styles.Link__alt}>
					<span>See More Equity Jobs</span>
					<Image
						src="/images/arrow.svg"
						alt="arrow icon"
						width={15}
						height={15}
					/>
				</Link>
			</section>
			{/* 8.  How It Works*/}
			{/* 8.  How It Works*/}
			<section className={styles.conactUs}>
        <h1>Let's build companies that help everyone succeed</h1>
        <section className={styles.contactUs__links}>
          <Link href="/" >SINC With Us</Link>
          <Link href="/" className={styles.contactUs__cta}>Apply to SIP 1.0</Link>
        </section>
      </section>
		</main>
	);
}
