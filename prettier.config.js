/** @type {import("prettier").Options} */
export default {
	"useTabs": true,
	"trailingComma": "all",
	"printWidth": 80,
	"plugins": ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	"pluginSearchDirs": ["."],
	"overrides": [
		{
			"files": "*.svelte",
			"options": {
				"parser": "svelte"
			}
		}
	]
}
