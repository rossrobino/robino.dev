import "@/app/style.css";
import ross from "@/public/ross.jpeg";
import Projects from "@/ui/projects";
import Readme from "@/ui/readme";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Ross Robino",
	description: "Ross Robino's personal website.",
};

export default async function Page() {
	return (
		<>
			<main>
				<section id="readme">
					<Readme />
					<Image
						src={ross}
						alt="An image of Ross in a field."
						loading="eager"
					/>
				</section>
				<section id="projects">
					<Projects />
				</section>
			</main>
		</>
	);
}
