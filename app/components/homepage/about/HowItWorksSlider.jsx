"use cliient";
import Section from "../../Section";
import Title from "../../Title";
import Cta from "../../Cta";
import Image from "next/image";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.section`
	grid-column: 2;
	position: relative;
	overflow: hidden;

  .slick-slide > div {
    margin: 0 1em;
  }



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
	background-color: #fff;
  border-radius: 0.5em;
	padding: 1em;

`;
const ImgContainer = styled.section`
background-color: black;
width: 3em;
height: 3em;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 1em;
`;
const Details = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1em;
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
      className="prevArrow"
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
function HowItWorksSlider({ howItWorks }) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: true,
		autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
		responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
	};

	return (
			<CarouselContainer>
				<Slider {...settings}>
					{howItWorks.map((feature, idx) => (
						<Slide key={idx}>
							<ImgContainer>
								<Image
									src={`/images/${feature.image}`}
									alt=""
									width={50}
									height={30}
								/>
							</ImgContainer>
							<Details>
								<Title text={feature.title} mode="small" />
								{feature.description.map((desc, idx) => (
									<p key={idx}>{desc}</p>
								))}
								
							</Details>
						</Slide>
					))}
				</Slider>
			</CarouselContainer>
		
	);
}

export default HowItWorksSlider;
