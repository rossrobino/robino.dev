<script>
	import ExternalLink from "$lib/components/ExternalLink.svelte";
	import Book from "$lib/svg/Book.svelte";

	export let repos = [];
</script>

{#if repos.length}
	<section
		id="portfolio"
		class="bg-slate-50 text-slate-900 md:rounded-sm p-4"
	>
		<h2>Portfolio</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
			{#each repos as repo}
				<div
					class="bg-p text-slate-50 rounded-sm p-4 flex flex-col gap-1"
				>
					<h3>
						<ExternalLink href={repo.homepage} icon="home">
							{repo.name}
						</ExternalLink>
					</h3>
					{#if repo.description}
						<div>
							{repo.description}
						</div>
					{/if}
					<div>
						<a href={repo.html_url} class="flex gap-2 group">
							{repo.full_name}
							<span class="hidden group-hover:flex items-center">
								<Book />
							</span>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</section>
{:else}
	<hr class="border border-slate-50">
{/if}
