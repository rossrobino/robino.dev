import { process } from "robino/util/md";
import md from "./index.md?raw";

export const prerender = true;

export const load = async () => {
	const { html } = await process(md);
	return { html };
};
