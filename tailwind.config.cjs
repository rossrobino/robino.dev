/** @type {import('tailwindcss').Config} */
module.exports = {
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
	plugins: [],
};
