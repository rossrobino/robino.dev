import { fetchReadme } from "@/lib/data";

export default async function Readme() {
	return (
		<div>
			<h1>Ross Robino</h1>
			<div dangerouslySetInnerHTML={{ __html: await fetchReadme() }}></div>
		</div>
	);
}
