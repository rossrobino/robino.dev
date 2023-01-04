export async function load({ fetch }) {
	const res = await fetch("https://api.github.com/users/rossrobino/repos");
	let repos = await res.json();
	repos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
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
