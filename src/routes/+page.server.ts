import type { Endpoints } from "@octokit/types";

type Repos = Endpoints["GET /users/{username}/repos"]["response"]["data"];

export const load = async () => {
	const repos = await fetchRepos();
	return { repos };
};

const fetchRepos = async () => {
	try {
		const res = await fetch("https://api.github.com/users/rossrobino/repos");

		const repos: Repos = await res.json();

		// sort by most recent first
		repos.sort((a, b) => {
			return Number(b.stargazers_count) - Number(a.stargazers_count);
		});

		// filter out forks
		return repos.filter((repo) => repo.fork === false);
	} catch {
		return [];
	}
};
