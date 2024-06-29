import styled from "styled-components";
import FeaturedSlider from "./FeaturedSlider"
import Section from "../../Section"
import Title from "../../Title"

const StyledFeature = styled.section`
  grid-column: 1/-1;
  margin: 2em 0;
  background-color: #fff;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
`;

function FeatureSection({ featuredIn }) {
	return (
		<StyledFeature>
			<Section>
				<header>
					<Title text="As Featured In" mode="small" />
				</header>
      </Section>
      
      <FeaturedSlider featuredIn={featuredIn} />
		</StyledFeature>
	);
}

export default FeatureSection;
