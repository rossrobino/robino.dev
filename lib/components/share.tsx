"use client";

// import Script from "next/script";
import { useEffect } from "react";

export default function Share() {
	useEffect(() => {
		if (!customElements?.get("drab-share")) {
			import("drab/share/define");
		}
	}, []);

	return (
		// @ts-ignore
		<drab-share value="https://robino.dev">
			<button data-trigger type="button" className="secondary">
				<span data-content>Share</span>
				<template data-swap>Copied</template>
			</button>
			{/* @ts-ignore */}
		</drab-share>
	);
}
