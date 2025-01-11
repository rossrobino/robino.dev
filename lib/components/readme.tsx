import { fetchReadme } from "@/lib/data";

export default async function Readme() {
	const html = await fetchReadme();

	return (
		<div>
			<h1>Ross Robino</h1>
			<div dangerouslySetInnerHTML={{ __html: html }}></div>
		</div>
	);
}
