import type { NextConfig } from "next";

export default {
	experimental: {
		ppr: true,
		cacheComponents: true,
	},
	turbopack: {
		root: "/",
	},
} satisfies NextConfig;
