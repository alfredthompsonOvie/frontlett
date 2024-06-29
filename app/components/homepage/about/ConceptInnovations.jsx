import Section from "../../Section";
import Title from "../../Title";

function ConceptInnovations() {
  return (
    <Section $mode="concept">
				<header>
					<Title text="Our Concept Innovations" />
					<p>
						We have proprietary concept innovations that will support the
						startup ecosystem, support solution-providers/entrepreneurs and
						ultimately help democratize success;
					</p>
				</header>
				<ul>
					<li>
						<Title text="Service Incubator" mode="small" />
						<p>
							A service-for-shares model of incubating pre-product startups and
							early-stage companies by building their early stage product and
							MVP
						</p>
					</li>
					<li>
          <Title text="Virtualting" mode="small" />
						<p>
							A resource share model that allows companies share the time of
							resources (employees, consultants, technical advisers or
							influencers) while also splitting the service cost of the resource
						</p>
					</li>
					<li>
          <Title text="Diiming" mode="small" />
          
						<p>
							A progressive investment model that allows you to put aside income
							(disposable or non-disposable) as investment over a period towards
							an investment or spend of your choice 
						</p>
					</li>
				</ul>
			</Section>
  )
}

export default ConceptInnovations
