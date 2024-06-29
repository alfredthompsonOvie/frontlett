import Section from "../../Section";
import Title from "../../Title";
import Cta from "../../Cta";
import Image from "next/image";
import styled from "styled-components";

const Resources = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1em;
	margin: 3em 0 1em;

	img {
		width: 100%;
		object-fit: cover;
	}
`;
const Card = styled.section`
	display: grid;
	grid-template-columns: 4fr 1fr;
	text-align: left;
	gap: 0.2em;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
function BlogsResources() {
	return (
		<Section>
			<header>
				<Title text="Blogs & Resources" />
			</header>
			<Resources>
				<section>
					<Image
						src="/images/blog1.svg"
						alt="arrow icon"
						width={500}
						height={200}
					/>
				</section>
				<section>
					<Image
						src="/images/blog2.svg"
						alt="arrow icon"
						width={500}
						height={200}
					/>
				</section>
				<section>
					<Image
						src="/images/blog2.svg"
						alt="arrow icon"
						width={500}
						height={200}
					/>
				</section>
			</Resources>
			<Resources>
				<Card>
					<section >
						<Title text="Top Ten Most Powerful Startup" mode="blogsTitle" />
						<p>
							Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top
							Ten Most Powerful Startup
						</p>
					</section>
					<section>
						<Image
							src="/images/blog11.svg"
							alt="arrow icon"
							width={50}
							height={50}
						/>
					</section>
				</Card>
				<Card>
					<section >
            <Title text="Top Ten Most Powerful Startup" mode="blogsTitle" />
            
						<p>
							Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top
							Ten Most Powerful Startup
						</p>
					</section>
					<section>
						<Image
							src="/images/blog21.svg"
							alt="arrow icon"
							width={50}
							height={50}
						/>
					</section>
				</Card>
				<Card>
					<section >
          <Title text="Top Ten Most Powerful Startup" mode="blogsTitle" />
						
						<p>
							Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top
							Ten Most Powerful Startup
						</p>
					</section>
					<section>
						<Image
							src="/images/blog31.svg"
							alt="arrow icon"
							width={50}
							height={50}
						/>
					</section>
				</Card>
			</Resources>
			<Cta href="#" mode="linkAlt">
				<span>See More Equity Jobs</span>
				<Image
					src="/images/arrow.svg"
					alt="arrow icon"
					width={15}
					height={15}
				/>
			</Cta>
		</Section>
	);
}

export default BlogsResources;
