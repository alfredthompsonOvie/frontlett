"use client";
import styles from "../styles/Hero.module.css";
import Link from "next/link";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const slideContents = [
	{
		image: "hero-slide2.svg",
		title: "SINC Partners is a service incubation company",
		description: [
			"Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
		],
	},
	{
		image: "hero-slide1.svg",
		title: "Come with an idea, leave with a company. ",
		description: [
			"You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.",
		],
	},
	{
		image: "hero-slide3.svg",
		title: "We are big on these 3 things;",
		description: [
			"✓ Service Incubation & Ecosystem Advocacy",
			"✓ Building SAAS & Marketing Tech Platforms",
			"✓ Institutional Innovations ",
		],
	},
];

export default function Hero() {
	return (
		<section className={styles.carouselContainer}>
				<Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={false}>
					{slideContents.map((slideContent, idx) => (
						<section key={idx} className={styles.slide}>
							<section className={styles.imgContainer}>
								<Image
									src={`/images/${slideContent.image}`}
									alt=""
									width={500}
									height={300}
								/>
							</section>
							<section className={styles.details}>
								<h1>{slideContent.title}</h1>
								{slideContent.description.map((desc) => (
									<p key={desc}>{desc}</p>
								))}
								<Link href="/" className={styles.Link__cta}>
									SINC With Us
								</Link>
							</section>
						</section>
					))}
				</Carousel>
		</section>
	);
}
