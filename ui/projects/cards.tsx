"use client";

import type { ReposData } from "@/lib/data";
import { clsx } from "clsx";
import { ViewTransition, startTransition, useState } from "react";

const features = ["created_at", "stargazers_count", "pushed_at"] as const;

type Feature = (typeof features)[number];

const compare = (feature: Feature) => {
	if (feature === "stargazers_count") {
		return (a: ReposData[number], b: ReposData[number]) =>
			Number(b[feature]) - Number(a[feature]);
	}

	return (a: ReposData[number], b: ReposData[number]) =>
		new Date(String(b[feature])).valueOf() -
		new Date(String(a[feature])).valueOf();
};

const label = (feature: Feature) =>
	feature === "stargazers_count" ? "stars" : feature.split("_").at(0);

export default function Cards({ repos }: { repos: ReposData }) {
	const [current, setCurrent] = useState<Feature>("created_at");

	// derive the order from state instead of mutating props
	const sorted = repos.toSorted(compare(current));

	return (
		<>
			<div id="features">
				{features.map((feature) => {
					const selected = current === feature;

					return (
						<button
							className={clsx("ghost", { selected })}
							key={feature}
							disabled={selected}
							// updates inside a transition animate with <ViewTransition>
							onClick={() => startTransition(() => setCurrent(feature))}
							type="button"
						>
							{label(feature)}
						</button>
					);
				})}
			</div>
			<div id="project-grid">
				{sorted.map(
					({
						homepage,
						name,
						description,
						html_url,
						full_name,
						stargazers_count,
					}) => (
						<ViewTransition key={name}>
							<div>
								<div>
									<h3>
										<a href={homepage || html_url} target="_blank">
											{name}
										</a>
									</h3>
									<div>{description}</div>
								</div>
								<div>
									<a href={html_url} target="_blank">
										{full_name}
									</a>
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
											aria-hidden="true"
										>
											<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
										</svg>
										{stargazers_count}
									</div>
								</div>
							</div>
						</ViewTransition>
					),
				)}
			</div>
		</>
	);
}
