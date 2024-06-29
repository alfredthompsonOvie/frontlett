import Section from "../../Section";
import Title from "../../Title";
function AreaOfFocus() {
	return (
		<Section $mode="mission">
			<header>
				<Title text="Our Area of Focus" />
				<p>
					In our quest to help make success available to everyone, we have
					initial strategic direction to focus on these five (5) key areas at
					the lab
				</p>
			</header>
			<ul>
				<li>
					<span>01</span>
					<span>Business Support & Incubation</span>
				</li>
				<li>
					<span>02</span>
					<span>On-Demand & As-A-Service</span>
				</li>
				<li>
					<span>03</span>
					<span>Marketplace & Crowdsourcing</span>
				</li>
				<li>
					<span>04</span>
					<span>Aggregation & Shared Economy</span>
				</li>
				<li>
					<span>05</span>
					<span>Decentralized Economy & Digital Assets</span>
				</li>
			</ul>
		</Section>
	);
}

export default AreaOfFocus;
