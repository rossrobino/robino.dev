<script lang="ts">
	import Star from "$lib/svg/Star.svelte";
	import ExternalLink from "./ExternalLink.svelte";
	import type { Repos } from "$lib/types";

	export let repos: Repos;

	const features = ["stargazers_count", "created_at", "pushed_at"] as const;

	let currentFeature = "stargazers_count";

	const sortRepos = (feature: (typeof features)[number]) => {
		const sort = () => {
			if (feature === "created_at" || feature === "pushed_at") {
				repos.sort(
					(a, b) =>
						new Date(String(b[feature])).valueOf() -
						new Date(String(a[feature])).valueOf(),
				);
			} else if (feature === "stargazers_count") {
				repos.sort((a, b) => {
					return Number(b[feature]) - Number(a[feature]);
				});
			}
			currentFeature = feature;
			repos = repos;
		};

		// @ts-expect-error
		if (document.startViewTransition) {
			// @ts-expect-error
			document.startViewTransition(() => {
				sort();
			});
		} else {
			sort();
		}
	};
</script>

<div class="mb-4 flex flex-wrap">
	{#each features as feature}
		<div>
			<button
				class="button button-ghost capitalize"
				disabled={currentFeature === feature}
				on:click={() => sortRepos(feature)}
			>
				{feature.split("_").join(" ")}
			</button>
			{#if currentFeature === feature}
				<div
					style="view-transition-name: selectedFilter;"
					class="bg-secondary p-[0.06rem]"
				/>
			{/if}
		</div>
	{/each}
</div>
<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each repos as { homepage, name, description, html_url, full_name, stargazers_count }}
		<div
			class="card bg-primary/5 flex flex-col justify-between gap-1 rounded shadow-sm transition-shadow hover:shadow"
			style="view-transition-name: repo-{name.replace('.', '')};"
		>
			<div>
				<h3 class="mt-0">
					<ExternalLink href={homepage ? homepage : html_url} icon="home">
						{name}
					</ExternalLink>
				</h3>
				{#if description}
					<div>{description}</div>
				{/if}
			</div>
			<div class="flex justify-between gap-1">
				<div class="flex justify-between gap-2">
					<ExternalLink href={html_url} icon="book">
						{full_name}
					</ExternalLink>
				</div>
				<div class="flex items-center gap-1">
					<Star />
					<span class="pt-0.5">{stargazers_count}</span>
				</div>
			</div>
		</div>
	{/each}
</div>
