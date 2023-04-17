export const load = async ({ fetch }) => {
	const res = await fetch("https://api.github.com/users/rossrobino/repos");

	let repos: Repos = await res.json();

	// sort by created_at date, most recent first
	repos.sort(
		(a, b) =>
			new Date(String(b.created_at)).valueOf() -
			new Date(String(a.created_at)).valueOf(),
	);

	// filter out forks
	repos = repos.filter((repo) => repo.fork === false);

	return { repos };
};
