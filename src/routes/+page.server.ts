import { dev } from "$app/environment";
import { conn } from "$lib/db/conn.server.js";
import { PageInsights } from "$lib/db/schema.js";
import { eq } from "drizzle-orm";

export const load = async ({ fetch }) => {
	return { stream: { views: fetchViews(), repos: fetchRepos(fetch) } };
};

const fetchViews = async () => {
	const insights = await conn
		.select()
		.from(PageInsights)
		.where(eq(PageInsights.id, 1));

	const views = ++insights[0].views;

	if (!dev) {
		// add 1 to views
		await conn
			.update(PageInsights)
			.set({ views })
			.where(eq(PageInsights.id, 1))
			.returning();
	}

	return views;
};

const fetchRepos = async (
	fetch: (
		input: RequestInfo | URL,
		init?: RequestInit | undefined,
	) => Promise<Response>,
) => {
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

	return repos;
};
