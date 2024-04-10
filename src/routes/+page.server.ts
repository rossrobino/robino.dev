import { dev } from "$app/environment";
import type { Repos } from "$lib/types";
import { process } from "robino/util/md";

export const load = async () => {
	const [repos, readme] = await Promise.all([fetchRepos(), fetchReadme()]);
	return { repos, readme };
};

const fetchReadme = async () => {
	const res = await fetch(
		"https://raw.githubusercontent.com/rossrobino/rossrobino/main/README.md",
	);

	let readme = await res.text();

	// remove h1
	readme = readme.split("\n").slice(2).join("\n");

	const { html } = await process(readme);

	return html;
};

const fetchRepos = async () => {
	try {
		const reposRes = await fetch(
			"https://api.github.com/users/rossrobino/repos",
		);

		const repos: Repos = await reposRes.json();

		// sort by most recent first
		repos.sort((a, b) => {
			return Number(b.stargazers_count) - Number(a.stargazers_count);
		});

		const projectNames = [
			"drab",
			"typo",
			"gpt",
			"uico",
			"domco",
			"papi",
			"splits",
			"plought",
			"blog",
		];

		const filtered = repos.filter((repo) => {
			return projectNames.includes(repo.name);
		});

		return filtered;
	} catch {
		if (dev) {
			const mock = [
				{
					homepage: "https://robino.dev",
					name: "Name",
					description: "A description of the repo",
					html_url: "https://robino.dev",
					full_name: "rossrobino/name",
					stargazers_count: 10,
				},
				{
					homepage: "https://robino.dev",
					name: "Name",
					description: "A description of the repo",
					html_url: "https://robino.dev",
					full_name: "rossrobino/name",
					stargazers_count: 10,
				},
				{
					homepage: "https://robino.dev",
					name: "Name",
					description: "A description of the repo",
					html_url: "https://robino.dev",
					full_name: "rossrobino/name",
					stargazers_count: 10,
				},
				{
					homepage: "https://robino.dev",
					name: "Name",
					description: "A description of the repo",
					html_url: "https://robino.dev",
					full_name: "rossrobino/name",
					stargazers_count: 10,
				},
			] as Repos;

			return mock;
		}
		return [];
	}
};
