"use client";

import { useEffect } from "react";

export default function Share() {
	useEffect(() => {
		import("drab/share/define");
	}, []);

	return (
		// @ts-ignore
		<drab-share value="https://robino.dev">
			<button data-trigger type="button" className="secondary">
				<span data-content>Share</span>
				<div data-swap>Copied</div>
			</button>
			{/* @ts-ignore */}
		</drab-share>
	);
}
