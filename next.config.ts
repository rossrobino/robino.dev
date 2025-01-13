import type { NextConfig } from "next";

export default {
	experimental: {
		ppr: true,
		dynamicIO: true,
	},
} satisfies NextConfig;
