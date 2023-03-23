export async function load({ fetch }) {
	const res = await fetch("https://api.github.com/users/rossrobino/repos");
	
	let repos = await res.json();

	// sort by created_at date, most recent first
	repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

	// filter out forks
	repos = repos.filter((repo) => repo.fork === false);

	// creates a new array with just the data points needed for the page
	return {
		repos: repos.map((repo) => ({
			name: repo.name,
			full_name: repo.full_name,
			homepage: repo.homepage,
			description: repo.description,
			html_url: repo.html_url,
		})),
	};
}
