import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { css } from "styled-components";

import Cta from "./Cta";

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
	${(props) => {
		switch (props.$variant) {
			case "hero":
				return css`
					background-color: #fff;

					h1 {
						margin-top: 1em;
						font-size: clamp(1.25rem, 6vw, 2rem);
						line-height: 1;
					}

					@media (min-width: 768px) {
						display: grid !important;
						grid-template-columns: 1fr 5fr 5fr 1fr;
						grid-template-rows: auto;
						align-items: center;
						gap: 1em;
						height: 100%;
					}
				`;
			case "howItWorks":
				return css`
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 0.5em;

				`;
			default:
				return css`
					/* background-color: #fff; */
				`;
		}
	}}
`;
const ImgContainer = styled.section`
	height: 100%;
	background-color: #fff;
	display: flex;
	/* display: none; */

	img {
		object-fit: cover;
		width: 100%;
		height: 100% !important;
	}

	@media (min-width: 768px) {
		grid-column: 3/-1 !important;
		grid-row: 1;
		height: 100%;
		display: block;
	}
`;

const Details = styled.section`
	grid-column: 2;
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 0em 1em 3em;
	text-align: left;
	max-width: 550px;

	@media (min-width: 768px) {
		grid-column: 2;
		grid-row: 1;

		/* padding: 0em; */
	}
`;

function NextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "red" }}
			onClick={onClick}
		/>
	);
}

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "green" }}
			onClick={onClick}
		/>
	);
}

function Slick({
	contents,
	variant,
	cta = false,
	slidesToShow = 1,
	arrow,
	resize,
}) {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 6000,
		cssEase: "linear",
		className: "slideContainer",
		prevArrow: arrow ? <PrevArrow /> : null,
		nextArrow: arrow ? <NextArrow /> : null,
		responsive: resize
			? [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
							dots: true,
						},
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							initialSlide: 2,
						},
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						},
					},
			  ]
			: null,
	};
	return (
		<CarouselContainer>
			<Slider {...settings}>
				{contents.map((slideContent, idx) => (
					<Slide key={idx} $variant={variant}>
						<ImgContainer>
							<Image
								src={`/images/${slideContent.image}`}
								alt=""
								width={500}
								height={300}
							/>
						</ImgContainer>
						<Details>
							<h1>{slideContent.title}</h1>
							{slideContent.description.map((desc) => (
								<p key={desc}>{desc}</p>
							))}

							{cta && <Cta />}
						</Details>
					</Slide>
				))}
			</Slider>
		</CarouselContainer>
	);
}

export default Slick;
