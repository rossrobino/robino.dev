<script lang="ts">
	import ExternalLink from "$lib/components/ExternalLink.svelte";

	export let repos: Repos = [];
</script>

{#if repos.length}
	<section id="portfolio" class="bg-slate-50 p-4 text-p md:rounded-sm">
		<h2>Portfolio</h2>
		<div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
			{#each repos as { homepage, name, description, html_url, full_name }}
				<div class="flex flex-col gap-1 rounded-sm bg-p p-4 text-slate-50">
					<h3>
						<ExternalLink href={homepage ? homepage : html_url} icon="home">
							{name}
						</ExternalLink>
					</h3>
					{#if description}
						<div>
							{description}
						</div>
					{/if}
					<div>
						<ExternalLink href={html_url} icon="book">
							{full_name}
						</ExternalLink>
					</div>
				</div>
			{/each}
		</div>
	</section>
{:else}
	<hr class="border border-slate-50" />
{/if}
