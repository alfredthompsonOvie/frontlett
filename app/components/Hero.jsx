"use client";
import { useRef, useState, useEffect } from "react";
import styles from "../styles/Hero.module.css";


import Link from "next/link";
import Image from "next/image";

const slideContents = [
	{
		image: "hero-slide3.svg",
		title: "SINC Partners is a service incubation company",
		description: [
			"Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
		],
	},
	{
		image: "hero-slide2.svg",
		title: "Come with an idea, leave with a company. ",
		description: [
			"You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.",
		],
	},
	{
		image: "hero-slide4.svg",
		title: "We are big on these 3 things;",
		description: [
			"✓ Service Incubation & Ecosystem Advocacy",
			"✓ Building SAAS & Marketing Tech Platforms",
			"✓ Institutional Innovations ",
		],
	},
];

register();
export default function Hero() {
	const [activeIndex, setActiveIndex] = useState(0);

	const goToNext = (idx) => {
		// const index = activeIndex === slideContents.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(idx);
	};
	function loopSlide() {
		let slide = activeIndex + 1
		setInterval(()=> goToNext(slide), 1000)
		
	}

	useEffect(() => {
		// loopSlide()
	}, []);
	return (
		<section className={styles.carouselContainer}>
			<section
				className={styles.carouselSlides}
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{slideContents.map((slideContent, idx) => (
					<section key={idx} className={styles.slide}>
						<section className={styles.imgContainer}>
							<Image src={`/images/${slideContent.image}`} alt="" width={500} height={300} />{" "}
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
			</section>
			<section className={styles.buttonContainer}>
				{slideContents.map((slideContents, idx) => (
					<button className={`${styles.pagination} ${idx === activeIndex ? styles.active : ""}`} key={idx} onClick={()=> goToNext(idx)}></button>
				))}
			</section>
		</section>
		// <div className="slider-container">
		// 	<div ref={sliderRef} className="keen-slider">
		//     <div className="keen-slider__slide">
		//     <section>
		// 				<section>
		// 					<Image src="" alt="" width={500} height={300} />
		// 				</section>
		// 				<section className={styles.details}>
		// 					<h1> </h1>
		// 					<p>

		// 					</p>
		// 					<Link href="/" className={styles.Link__cta}>
		// 						SINC With Us
		// 					</Link>
		// 				</section>
		// 			</section>
		//     </div>
		//     <div className="keen-slider__slide">
		//     <section>
		// 				<section>
		// 					<Image src="" alt="" width={500} height={300} />
		// 				</section>
		// 				<section className={styles.details}>
		// 					<h1></h1>
		// 					<p>

		// 					</p>
		// 					<Link href="/" className={styles.Link__cta}>
		// 						SINC With Us
		// 					</Link>
		// 				</section>
		// 			</section>
		//     </div>
		//     <div className="keen-slider__slide">
		//     <section>
		// 				<section>
		// 					<Image src="" alt="" width={500} height={300} />
		// 				</section>
		// 				<section className={styles.details}>
		// 					<h1></h1>
		// 					<ul>
		//             <li></li>
		//             <li></li>
		// 					</ul>
		// 					<Link href="/" className={styles.Link__cta}>
		// 						SINC With Us
		// 					</Link>
		// 				</section>
		// 			</section>
		//     </div>
		// 	</div>
		// 	{/* <swiper-container
		// 		ref={swiperElRef}
		// 		slides-per-view="1"
		// 		pagination="true"
		// 		loop="true"
		// 		speed="500"
		// 	>
		// 		<swiper-slide>
		// 			<section>
		// 				<section>
		// 					<Image src="" alt="" width={500} height={300} />
		// 				</section>
		// 				<section className={styles.details}>
		// 					<h1>SINC Partners is a service incubation company </h1>
		// 					<p>
		// 						Connecting experts in product development and growth marketing
		// 						willing to offer their services to amazing startups in exchange
		// 						for minute equity (usually 0.5% to 2%).
		// 					</p>
		// 					<Link href="/" className={styles.Link__cta}>
		// 						SINC With Us
		// 					</Link>
		// 				</section>
		// 			</section>
		// 		</swiper-slide>
		// 		<swiper-slide>Slide 2</swiper-slide>
		// 		<swiper-slide>Slide 3</swiper-slide>
		// 	</swiper-container> */}
		// </div>
	);
}
