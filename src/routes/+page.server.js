export const prerender = true;

export async function load({ fetch }) {
	const res = await fetch("https://api.github.com/users/rossrobino/repos");
	const repos = await res.json();
	return { repos };
}
