"use client";
import Image from "next/image";
import styles from "./page.module.css";

import Hero from "./components/Hero";
import Slick from "./components/Slick";

import Link from "next/link";
import { useEffect, useState } from "react";

import HeroSection from "./components/homepage/HeroSection";
import NetworksOfBuilders from "./components/homepage/about/NetworksOfBuilders";
import AreaOfFocus from "./components/homepage/about/AreaOfFocus";
import ConceptInnovations from "./components/homepage/about/ConceptInnovations";
import ServiceModel from "./components/homepage/about/ServiceModel";
import StudioPortfolio from "./components/homepage/about/StudioPortfolio";
import Cofound from "./components/homepage/about/Cofound";
import HowItWorks from "./components/homepage/about/HowItWorks";
import InvestorsNetwork from "./components/homepage/about/InvestorsNetwork";
import EquityJobs from "./components/homepage/about/EquityJobs";
import BlogsResources from "./components/homepage/about/BlogsResources";
import CallToAction from "./components/homepage/about/CallToAction";
import FeatureSection from "./components/homepage/about/FeatureSection";

import styled from "styled-components";

const StyledMain = styled.main`
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	grid-template-rows: repeat(13, auto);
	justify-content: center;
`;
interface Data {
	heroSection: { [key: string]: any }[];
	howItWorks: { [key: string]: any }[];
	featuredIn: { [key: string]: any }[];
}

const NUM_OF_COMPANIES = 40;
export default function Home() {
	const companies = Array.from({ length: NUM_OF_COMPANIES }).map(
		(item, idx) => `logo${idx + 1}.svg`
	);

	const [data, setData] = useState<Data | null>(null);

	useEffect(() => {
		async function getData() {
			try {
				const res = await fetch("/data.json");
				const data = await res.json();
				console.log(data);
				setData(data);
			} catch (err) {
				console.log("Error fetching data:", err);
			}
		}
		getData();
	}, []);

	if (!data) {
		return <div className="screen">Loading...</div>;
	}
	const heroContents = data.heroSection;
	const howItWorks = data.howItWorks;
	const featuredIn = data.featuredIn;

	return (
		<StyledMain>
			 <HeroSection contents={heroContents} />
			<NetworksOfBuilders />
			<AreaOfFocus />
			<ConceptInnovations />
			<ServiceModel />
			<StudioPortfolio companies={companies} />
			<Cofound />
			<HowItWorks howItWorks={howItWorks} />
			<InvestorsNetwork />
			<EquityJobs />
			<BlogsResources />
			<FeatureSection featuredIn={featuredIn}  />
			<CallToAction />

		</StyledMain>
	);
}
