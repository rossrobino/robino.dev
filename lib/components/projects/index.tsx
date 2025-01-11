import Cards from "@/lib/components/projects/cards";
import { fetchRepos } from "@/lib/data";

export default async function Repos() {
	const repos = await fetchRepos();

	return <Cards repos={repos} />;
}
