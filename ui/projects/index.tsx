import { fetchRepos } from "@/lib/data";
import Cards from "@/ui/projects/cards";

export default async function Repos() {
	const repos = await fetchRepos();

	return <Cards repos={repos} />;
}
