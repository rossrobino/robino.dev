<script>
	import ExternalLink from "../ExternalLink.svelte";
</script>

<section id="skills" class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 my-4">
	<div>
		<h2>Languages</h2>
		<ul class="list-disc ml-8 mt-2 flex flex-col gap-2">
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>Python</li>
			<li>SQL</li>
		</ul>
	</div>
	<div>
		<h2>Tooling</h2>
		<ul class="list-disc ml-8 mt-2 flex flex-col gap-2">
			<li>
				<ExternalLink href="https://svelte.dev/">Svelte</ExternalLink>
			</li>
			<li>
				<ExternalLink href="https://kit.svelte.dev/">
					SvelteKit
				</ExternalLink>
			</li>
			<li>
				<ExternalLink href="https://astro.build/">Astro</ExternalLink>
			</li>
			<li>
				<ExternalLink href="https://supabase.com/">
					Supabase
				</ExternalLink>
			</li>
			<li>
				<ExternalLink href="https://tailwindcss.com/">
					tailwindcss
				</ExternalLink>
			</li>
		</ul>
	</div>
</section>
