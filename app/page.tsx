import "@/app/style.css";
import Projects from "@/lib/components/projects";
import Readme from "@/lib/components/readme";
import ross from "@/public/ross.jpeg";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
					<Image src={ross} alt="An image of Ross in a field." />
				</section>
				<section id="projects">
					<h2>Projects</h2>
					<Projects />
				</section>
			</main>
			<footer>
				<ul>
					<li>
						<Link href="mailto:ross@robino.dev">Email</Link>
					</li>
					<li>
						<Link href="https://github.com/rossrobino">GitHub</Link>
					</li>
					<li>
						<Link href="https://www.linkedin.com/in/rossrobino/">LinkedIn</Link>
					</li>
				</ul>
			</footer>
		</>
	);
}
