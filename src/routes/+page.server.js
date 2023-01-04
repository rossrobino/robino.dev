export const prerender = true;

export async function load({ fetch }) {
	const res = await fetch("https://api.github.com/users/rossrobino/repos");
	const repos = await res.json();
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
