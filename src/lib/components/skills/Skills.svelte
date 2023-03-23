<script lang="ts">
	import ExternalLink from "../ExternalLink.svelte";
</script>

<section id="skills" class="grid grid-cols-1 gap-4 p-4 md:my-4 md:grid-cols-2">
	<div>
		<h2>Languages</h2>
		<ul class="ml-6 mt-2 flex list-disc flex-col gap-2">
			<li>JavaScript</li>
			<li>TypeScript</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>Python</li>
		</ul>
	</div>
	<div>
		<h2>Tooling</h2>
		<ul class="ml-6 mt-2 flex list-disc flex-col gap-2">
			<li>
				<ExternalLink href="https://svelte.dev/">Svelte</ExternalLink>
			</li>
			<li>
				<ExternalLink href="https://kit.svelte.dev/">SvelteKit</ExternalLink>
			</li>
			<li>
				<ExternalLink href="https://astro.build/">Astro</ExternalLink>
			</li>
			<li>
				<ExternalLink href="https://supabase.com/">Supabase</ExternalLink>
			</li>
			<li>
				<ExternalLink href="https://tailwindcss.com/">tailwindcss</ExternalLink>
			</li>
		</ul>
	</div>
</section>
