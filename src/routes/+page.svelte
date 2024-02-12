<script lang="ts">
	import "../app.postcss";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	import profilePic from "$lib/images/ross.webp";
	import ExternalLink from "$lib/components/ExternalLink.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import { onMount } from "svelte";

	inject({ mode: dev ? "development" : "production" });

	export let data;

	onMount(async () => {
		if (!customElements.get("drab-share")) {
			await import("drab/share/define");
		}
	});
</script>

<div
	class="selection:bg-destructive selection:text-destructive-foreground prose font-humanist"
>
	<header class="bg-primary prose prose-invert flex justify-center px-8 py-6">
		<div class="max-w-screen-lg basis-full">
			<h2 class="m-0">Ross Robino</h2>
		</div>
	</header>
	<main>
		<section
			class="bg-primary prose prose-invert flex justify-center px-8 pb-6"
		>
			<div
				class="grid max-w-screen-lg basis-full grid-cols-1 md:grid-cols-5 md:gap-4"
			>
				<div class="flex flex-col justify-center md:col-span-3">
					<div>
						<h1 class="text-balance">Welcome to my personal website</h1>
						<p>
							I work as a Business Innovation Analyst at PepsiCo. Some of my
							hobbies are skiing, running, and playing guitar.
						</p>
						<p>
							Check out my programming projects or contact me using the links
							below.
						</p>
					</div>
				</div>
				<div class="col-span-2">
					<img
						src={profilePic}
						alt="Ross at the top of Blarney Castle in Ireland."
						class="aspect-[3/4] rounded-sm"
					/>
				</div>
			</div>
		</section>
		{#if data.repos.length}
			<section class="flex justify-center px-8 py-12">
				<div class="max-w-screen-lg basis-full">
					<h2 class="mt-0">Projects</h2>
					<Projects repos={data.repos} />
				</div>
			</section>
		{/if}
	</main>
	<footer class="bg-accent prose prose-invert flex justify-center px-8 py-4">
		<ul class="max-w-screen-lg basis-full list-none pl-0">
			<li>
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
			<li>
				<drab-share value="https://robino.dev">
					<button data-trigger type="button" class="button button-primary">
						<span data-content>Share</span>
						<template data-swap>Copied</template>
					</button>
				</drab-share>
			</li>
		</ul>
	</footer>
</div>
