import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<header className={styles.header}>
				<h1>Newsletter</h1>
				<p>
					Get the latest about SINC Partners, our startup Incubator program,
					Portfolio company offerings - straight into your inbox.
				</p>
				<form className={styles.form}>
					<input type="email" placeholder="Enter your email address" />
					<button type="submit" className="submit">
						Subscribe
					</button>
				</form>
			</header>

			<section className={styles.footer__main}>
				<section className={styles.footer__main__contents}>
						<section className={styles.footer__about}>
							<Link href="/" className={styles.footer__logo}>
								<Image
									src="/images/sinc_logo_white.svg"
									alt="SINC Partners"
									width={70}
									height={37}
									// fill
									className=""
								/>
							</Link>
							<p className={styles.sinc}>
								SINC Partners is a service incubation company connecting experts
								in product development and growth marketing willing to offer
								their services to amazing startups in exchange for minute equity
								(usually 0.5% to 2%)
							</p>
						</section>
							<ul className={styles.list}>
								<li className={styles.list__title}>Platforms</li>
								<li>
									<Link href="/">Kofoundme</Link>
								</li>
								<li>
									<Link href="/">InResidency</Link>
								</li>
								<li>
									<Link href="/">Service Market</Link>
								</li>
								<li>
									<Link href="/">Founders School</Link>
								</li>
								<li>
									<Link href="/">Metty</Link>
								</li>
								<li>
									<Link href="/">Grantty</Link>
								</li>
								<li>
									<Link href="/">Boldtell</Link>
								</li>
								<li>
									<Link href="/">Chekwa</Link>
								</li>
							</ul>
							<ul className={styles.list}>
								<li className={styles.list__title}>Initiatives</li>
								<li>
									<Link href="#">Jabi Plains</Link>
								</li>
								<li>
									<Link href="#">Local Pricing Initiative</Link>
								</li>
								<li>
									<Link href="#">Scholarship Program</Link>
								</li>
								<li>
									<Link href="#">School Pricing Program</Link>
								</li>
								<li>
									<Link href="#">University STEM</Link>
								</li>
								<li>
									<Link href="#">University InResidency</Link>
								</li>
								<li>
									<Link href="#">
										<span>1M Nigeria </span>
										<Image
											src="/images/flag-nigeria.svg"
											alt="nigerian flag"
											width={16}
											height={16}
											// fill
											className="logo"
										/>
										<span>Products</span>
									</Link>
								</li>
								<li>
									<Link href="#">Founders Festival</Link>
								</li>
							</ul>
							<ul className={styles.list}>
								<li className={styles.list__title}>About Us</li>
								<li>
									<Link href="#">Who We Are</Link>
								</li>
								<li>
									<Link href="#">Our People</Link>
								</li>
								<li>
									<Link href="#">Concept Innovations</Link>
								</li>
								<li>
									<Link href="#">Our Process</Link>
								</li>
								<li>
									<Link href="#">Investors</Link>
								</li>
								<li>
									<Link href="#">CSR & Events</Link>
								</li>
								<li>
									<Link href="#">Career</Link>
								</li>
								<li>
									<Link href="#">Contact</Link>
								</li>
							</ul>
							<ul className={styles.list}>
								<li className={styles.list__title}>More</li>
								<li>
									<Link href="#">Services</Link>
								</li>
								<li>
									<Link href="#">Equity Jobs</Link>
								</li>
								<li>
									<Link href="#">Co-found with us</Link>
								</li>
								<li>
									<Link href="#">Offers</Link>
								</li>
								<li>
									<Link href="#">Innovation News</Link>
								</li>
								<li>
									<Link href="#">FAQ</Link>
								</li>
								<li>
									<Link href="#">Blog & Resources</Link>
								</li>
								<li>
									<Link href="#">Press</Link>
								</li>
							</ul>

						<section className={styles.contacts}>
							<ul>
								<li className={styles.list__title}>Locations</li>
								<li>Abuja, Nigeria</li>
								<li>Lagos, Nigeria</li>
								<li>Philadelphia, USA</li>
							</ul>
							<section className={styles.contacts__links}>
								<section>
									<Image
										src="/images/aba.svg"
										alt="Accredited Business A+"
										width={180}
										height={37}
										// fill
										className="logo"
									/>
									<p>Trusted Business</p>
								</section>
								<section>
									<Link href="/">
										<Image
											src="/images/whatsapp-1.svg"
											alt="Accredited Business A+"
											width={180}
											height={37}
											// fill
											className="logo"
										/>
										<span>Chat with US</span>
									</Link>
								</section>
							</section>
						</section>

				</section>
			</section>

			<section className={styles.footer__footer}>
				<section className={styles.footer__footer__header}>
					<p>
						Guaranteed 2x on your service or cash investment, usually been the
						first to invest. Get in early and SINC your guaranty!
					</p>
					<section className={styles.gasus}>
						<Image
							src="/images/gasus-white.svg"
							alt="gasus logo"
							width={180}
							height={37}
							// fill
							className="logo"
						/>
						<p>
							We are a business built on the foundation of Christian values and
							belief
						</p>
					</section>
				</section>
				<section className={styles.copyright__header}>
					<p>&copy; 2023 SINC Partners Ltd. All rights reserved</p>
					<ul className={styles.notice}>
						<li>
							<Link href="#">Privacy Policy</Link>
						</li>
						
						<li>
							<Link href="#">Terms of Service</Link>
						</li>
						<li>
							<Link href="#">Security</Link>
						</li>
					</ul>
					<ul className={styles.socials}>
						<li>
							<Link href="#">
								<Image
									src="/images/facebook.svg"
									alt="facebook icon"
									width={25}
									height={25}
									// fill
									className="logo"
								/>
							</Link>
						</li>
						<li>
							<Link href="#">
								<Image
									src="/images/twitter.svg"
									alt="twitter icon"
									width={25}
									height={25}
									// fill
									className="logo"
								/>
							</Link>
						</li>
						<li>
							<Link href="#">
								<Image
									src="/images/instagram.svg"
									alt="instagram icon"
									width={25}
									height={25}
									// fill
									className="logo"
								/>
							</Link>
						</li>
						<li>
							<Link href="#">
								<Image
									src="/images/linkedin.svg"
									alt="linkedin icon"
									width={25}
									height={25}
									// fill
									className="logo"
								/>
							</Link>
						</li>
						<li>
							<Link href="#">
								<Image
									src="/images/medium.svg"
									alt="medium icon"
									width={25}
									height={25}
									// fill
									className="logo"
								/>
							</Link>
						</li>
						<li>
							<Link href="#">
								<Image
									src="/images/youtube.svg"
									alt="youtube icon"
									width={25}
									height={25}
									// fill
									className="logo"
								/>
							</Link>
						</li>
						<li>
							<Link href="#">
								<Image
									src="/images/chat.svg"
									alt="chat icon"
									width={25}
									height={25}
									// fill
									className="logo"
								/>
							</Link>
						</li>
					</ul>
				</section>
				<p className={styles.copyright__footer}>
					<span>Web In Nigeria</span>
					<Image
						src="/images/flag-nigeria.svg"
						alt="nigerian flag"
						width={16}
						height={16}
						className="logo"
					/>
				</p>
			</section>
		</footer>
	);
}
