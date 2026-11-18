import type { NextConfig } from "next";

export default {
	cacheComponents: true,
	partialPrefetching: true,
	reactCompiler: true,
	typedRoutes: true,
} satisfies NextConfig;
