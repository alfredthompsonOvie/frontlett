import Section from "../../Section";
import Title from "../../Title";
import Cta from "../../Cta";
import Card from "../../Card";
import Slick from "../../Slick";
import Image from "next/image";
import styled from "styled-components";
import HowItWorksSlider from "./HowItWorksSlider";

const SliderWrapper = styled.section`
	background-color: red;
	grid-column: 1/-1;
	margin: 2em 0;
`;
const StyledFeature = styled.section`
	grid-column: 1/-1;
	margin: 2em 0;
	background-color: #fff;
	border-radius: 10px;
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
`;
function HowItWorks({ howItWorks }) {
	return (
		<StyledFeature>
			<Section $mode="howItworks">
				<header>
					<Title text="How It Works" />
					<p>
						Our EIR program is our structured 3 months un-paid program designed
						to help us have a pipeline of business and technical cofounders who
						can run the venture of choice as CEO & CTO owning 20% equity each.
					</p>
				</header>
			</Section>
      <HowItWorksSlider howItWorks={howItWorks} />
      
      <Cta href="/" mode="secondary">
        <span>Support the Future</span>
        <Image
					src="/images/arrow.svg"
					alt="arrow icon"
					width={15}
					height={15}
				/>
      </Cta>
		</StyledFeature>
	);
}

export default HowItWorks;
