import { markdownProcessor } from "@/lib/md";
import type { Endpoints } from "@octokit/types";

export type ReposData =
	Endpoints["GET /users/{username}/repos"]["response"]["data"];

export async function fetchRepos() {
	"use cache";

	try {
		const reposRes = await fetch(
			"https://api.github.com/users/rossrobino/repos",
		);

		const repos: ReposData = await reposRes.json();

		// sort by most recent first
		repos.sort((a, b) => {
			return Number(b.stargazers_count) - Number(a.stargazers_count);
		});

		const projectNames = [
			"drab",
			"typo",
			"ai6",
			"uico",
			"domco",
			"splits",
			"ovr",
			"robino",
			"blog",
		];

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
