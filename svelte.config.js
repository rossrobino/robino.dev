import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter({
			isr: {
				expiration: 60 * 60 * 24,
			},
		}),
	},
};
