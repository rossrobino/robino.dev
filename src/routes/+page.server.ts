export const load = async () => {
	return { repos: fetchRepos() };
};

const fetchRepos = async () => {
	try {
		const res = await fetch("https://api.github.com/users/rossrobino/repos");

		const repos: Repos = await res.json();

		// sort by most recent first
		repos.sort(
			(a, b) =>
				new Date(String(b.created_at)).valueOf() -
				new Date(String(a.created_at)).valueOf(),
		);

		// filter out forks
		return repos.filter((repo) => repo.fork === false);
	} catch {
		return [];
	}
};
