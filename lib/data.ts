import { markdownProcessor } from "@/lib/md";
import type { Endpoints } from "@octokit/types";

export type ReposData =
	Endpoints["GET /users/{username}/repos"]["response"]["data"];

export async function fetchRepos() {
	"use cache";

	try {
		const [reposRes, ovrRes] = await Promise.all([
			fetch("https://api.github.com/users/rossrobino/repos").then((r) =>
				r.json(),
			),
			fetch("https://api.github.com/users/ovrjs/repos").then((r) => r.json()),
		]);

		const repos: ReposData = [...reposRes, ...ovrRes];

		// sort by most recent first
		repos.sort((a, b) => {
			return Number(b.stargazers_count) - Number(a.stargazers_count);
		});

		const projectNames = ["drab", "typo", "uico", "domco", "ovr", "blog"];

		return repos.filter((repo) => projectNames.includes(repo.name));
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function fetchReadme() {
	"use cache";

	try {
		const res = await fetch(
			"https://raw.githubusercontent.com/rossrobino/rossrobino/main/README.md",
		);

		let readme = await res.text();

		// remove h1
		readme = readme.split("\n").slice(2).join("\n");

		return (await markdownProcessor.process(readme)).html;
	} catch (error) {
		console.error(error);

		if (error instanceof Error) {
			return error.message;
		}

		return "Unknown error occurred.";
	}
}
