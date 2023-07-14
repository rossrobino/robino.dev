import typography from "@tailwindcss/typography";
import { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				p: "#0E1317",
			},
			fontFamily: {
				test: [
					"Seravek",
					"Gill Sans Nova",
					"Ubuntu",
					"Calibri",
					"DejaVu Sans",
					"source-sans-pro",
					"sans-serif",
				],
			},
		},
	},
	plugins: [typography],
} satisfies Config;
