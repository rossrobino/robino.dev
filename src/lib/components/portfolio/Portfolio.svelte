<script>
	import ExternalLink from "$lib/components/ExternalLink.svelte";

	export let repos = [];
</script>

{#if repos.length}
	<section id="portfolio" class="bg-slate-50 text-p md:rounded-sm p-4">
		<h2>Portfolio</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
			{#each repos as { homepage, name, description, html_url, full_name }}
				<div
					class="bg-p text-slate-50 rounded-sm p-4 flex flex-col gap-1"
				>
					<h3>
						<ExternalLink href={homepage} icon="home">
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
