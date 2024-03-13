<script lang="ts">
	import "../app.postcss";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	import ExternalLink from "$lib/components/ExternalLink.svelte";
	import { onMount } from "svelte";

	inject({ mode: dev ? "development" : "production" });

	onMount(async () => {
		if (!customElements.get("drab-share")) {
			await import("drab/share/define");
		}
	});
</script>

<div
	class="prose font-humanist selection:bg-destructive selection:text-destructive-foreground prose-a:underline-offset-2"
>
	<main>
		<slot />
	</main>
	<footer
		class="prose prose-invert flex justify-center bg-accent p-8 prose-li:pl-0"
	>
		<div class="max-w-screen-lg basis-full">
			<ul class="m-0 list-none pl-0">
				<li class="mt-0">
					<ExternalLink href="mailto:ross@robino.dev" icon="envelope">
						Email
					</ExternalLink>
				</li>
				<li>
					<ExternalLink href="https://github.com/rossrobino" icon="person">
						GitHub
					</ExternalLink>
				</li>
				<li>
					<ExternalLink
						href="https://www.linkedin.com/in/rossrobino/"
						icon="person"
					>
						LinkedIn
					</ExternalLink>
				</li>
				<li class="mb-0">
					<drab-share class="contents" value="https://robino.dev">
						<button
							data-trigger
							type="button"
							class="button button-primary mt-3"
						>
							<span data-content>Share</span>
							<template data-swap>Copied</template>
						</button>
					</drab-share>
				</li>
			</ul>
		</div>
	</footer>
</div>
