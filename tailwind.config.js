import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				p: "#0E1317",
			},
			fontFamily: {
				mans: ["Mansalva", "sans-serif"],
			},
		},
	},
	plugins: [typography],
};
