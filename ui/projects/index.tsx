import { fetchRepos } from "@/lib/data";
import Cards from "@/ui/projects/cards";

export default async function Repos() {
	return <Cards repos={await fetchRepos()} />;
}
