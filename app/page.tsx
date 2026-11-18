import ross from "@/public/ross.jpeg";
import Projects from "@/ui/projects";
import Readme from "@/ui/readme";
import Image from "next/image";

export default function Page() {
	return (
		<main>
			<section id="readme">
				<Readme />
				<Image
					src={ross}
					alt="An image of Ross in a field."
					loading="eager"
					fetchPriority="high"
				/>
			</section>
			<section id="projects">
				<Projects />
			</section>
		</main>
	);
}
