"use cliient";
import Title from "../../Title";
import Image from "next/image";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.section`
	grid-column: 2;
	position: relative;
	width: 100%;
	max-width: 600px;
	margin-inline: auto;
	overflow: hidden;

	@media (min-width: 768px) {
		grid-column: 1/-1;
		position: relative;
		width: 100%;
		max-width: initial;
		overflow: hidden;
		margin: auto;
	}
`;
const Slide = styled.section`
	width: 100%;

	.featureImage {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media (min-width: 768px) {
		display: grid !important;
		grid-template-columns: 6.5fr 3.5fr;
		gap: 1em;
	}
`;
const ImgContainer = styled.section``;
const Details = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 1em;
	background-color: #fff;
`;

function FeaturedIn({ featuredIn }) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 880,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};

	return (
			<CarouselContainer>
				<Slider {...settings}>
					{featuredIn.map((feature, idx) => (
						<Slide key={idx}>
							<ImgContainer>
								<Image
									src={`/images/${feature.image}`}
									alt=""
									width={500}
									height={300}
									className="featureImage"
								/>
							</ImgContainer>
							<Details>
								<Image
									src={`/images/${feature.icon}`}
									alt=""
									width={100}
									height={70}
								/>
								<Title text={feature.title} mode="small" />
								{feature.description.map((desc, idx) => (
									<p key={idx}>{desc}</p>
								))}
								<section>
									<p>REPORTED BY</p>
									<p>{feature.reportedBy}</p>
								</section>
							</Details>
						</Slide>
					))}
				</Slider>
			</CarouselContainer>
		
	);
}

export default FeaturedIn;
