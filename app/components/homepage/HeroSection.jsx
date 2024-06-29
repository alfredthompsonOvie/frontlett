"use client";
import Slick from "../Slick";

function HeroSection({ contents }) {
	return <Slick contents={contents} cta="true" slidesToShow={1} variant="hero" />;
}

export default HeroSection;
