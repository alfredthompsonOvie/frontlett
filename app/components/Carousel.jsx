import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Cta from "./Cta";
import Title from "./Title";

const CarouselContainer = styled.section`
	grid-column: 2;
	position: relative;
	width: 100%;
	max-width: 600px;
	margin-inline: auto;
	overflow: hidden;

	@media (min-width: 768px) {
		position: relative;
		width: 100%;
		max-width: initial;
		overflow: hidden;
		margin: auto;
		grid-column: 1/-1;
	}
`;
const Slide = styled.section`
	min-width: 100%;
	transition: opacity 1s ease-in-out;
	background-color: #fff;
	height: 100%;

	h1 {
		margin-top: 1em;
		font-size: clamp(1.25rem, 6vw, 2rem);
		line-height: 1;
	}
	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		display: grid;
		grid-template-columns: 1fr 5fr 5fr 1fr;
		align-items: center;
		gap: 1em;
		height: 100%;
	}
`;
const ImgContainer = styled.section`
	height: 100%;
	background-color: #fff;
	display: none;

	@media (min-width: 768px) {
		grid-column: 3/-1;
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
		padding: 0em;
	}
`;

function Carousel({ contents }) {
	return (
		<CarouselContainer>
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				showStatus={false}
				showArrows={false}
			>
				{contents.map((slideContent, idx) => (
					<Slide key={idx}>
						<ImgContainer>
							<Image
								src={`/images/${slideContent.image}`}
								alt=""
								width={500}
								height={300}
							/>
						</ImgContainer>
						<Details>
							<Title text={slideContent.title}/>
							{slideContent.description.map((desc) => (
								<p key={desc}>{desc}</p>
							))}

              <Cta text="SINC With Us" href="/"/>
						</Details>
					</Slide>
				))}
			</Carousel>
		</CarouselContainer>
	);
}

export default Carousel;
