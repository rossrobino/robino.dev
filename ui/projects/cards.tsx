"use client";

import type { ReposData } from "@/lib/data";
import { clsx } from "clsx";
import Link from "next/link";
import { useState } from "react";

export default function Cards({ repos }: { repos: ReposData }) {
	const features = ["created_at", "stargazers_count", "pushed_at"] as const;
	const defaultFeature = "created_at";

	let [current, setCurrent] = useState(defaultFeature);

	const sortRepos = (feature: (typeof features)[number]) => {
		const sort = () => {
			if (feature === "created_at" || feature === "pushed_at") {
				repos.sort(
					(a, b) =>
						new Date(String(b[feature])).valueOf() -
						new Date(String(a[feature])).valueOf(),
				);
			} else if (feature === "stargazers_count") {
				repos.sort((a, b) => {
					return Number(b[feature]) - Number(a[feature]);
				});
			}

			setCurrent(feature);
		};

		if (document.startViewTransition) {
			document.startViewTransition(() => {
				sort();
			});
		} else {
			sort();
		}
	};

	return (
		<>
			<div id="features">
				{features.map((feature) => {
					const selected = current === feature;
					let text = feature.split("_").at(0);
					if (text?.startsWith("star")) text = "stars";

					return (
						<button
							className={clsx("ghost", { selected })}
							key={feature}
							disabled={selected}
							onClick={() => sortRepos(feature)}
							type="button"
						>
							{text}
						</button>
					);
				})}
			</div>
			<div id="project-grid">
				{repos.map(
					({
						homepage,
						name,
						description,
						html_url,
						full_name,
						stargazers_count,
					}) => (
						<div
							key={name}
							style={{
								viewTransitionName: `repo-${name.replace(".", "")}`,
							}}
						>
							<div>
								<h3>
									<Link href={homepage ? homepage : html_url} target="_blank">
										{name}
									</Link>
								</h3>
								<div>{description}</div>
							</div>
							<div>
								<Link href={html_url} target="_blank">
									{full_name}
								</Link>
								<div className="star-count">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
									</svg>
									{stargazers_count}
								</div>
							</div>
						</div>
					),
				)}
			</div>
		</>
	);
}
