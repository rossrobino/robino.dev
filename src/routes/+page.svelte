<script lang="ts">
	import profilePic from "$lib/images/ross.webp";
	import ExternalLink from "$lib/components/ExternalLink.svelte";

	export let data;
</script>

<div
	class="min-w-[280px] bg-p bg-[url('/images/background.webp')] md:flex md:justify-center"
>
	<div class="flex min-h-[100dvh] w-full flex-col items-center">
		<header
			class="w-full justify-center bg-slate-50 text-p md:flex"
		>
			<div
				class="flex flex-col justify-between gap-2 p-4 md:w-[768px] md:flex-row md:items-center"
			>
				<h1><a class="font-mans no-underline" href="/">Ross Robino</a></h1>
				<nav>
					<ul class="flex flex-wrap gap-4">
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#portfolio">Portfolio</a>
						</li>
						<li>
							<a href="#skills">Skills</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		<main class="flex-1 md:w-[768px]">
			<article>
				<section
					id="about"
					class="grid grid-cols-1 gap-4 p-4 md:my-4 md:grid-cols-2"
				>
					<div class="order-last flex flex-col justify-center md:order-first">
						<h2 class="text-emerald-500">Welcome to my personal website</h2>
						<p>
							I work as a Business Innovation Analyst at PepsiCo. Some of my
							hobbies are skiing, running, and playing guitar.
						</p>
						<p>
							Feel free to check out my programming projects or contact me using
							the links below.
						</p>
					</div>
					<img
						src={profilePic}
						alt="Ross at the top of Blarney Castle in Ireland."
						class="aspect-[3/4] w-full rounded-sm border-4 border-slate-50"
					/>
				</section>
				<section id="portfolio" class="bg-slate-50 p-4 text-p md:rounded-sm">
					<h2>Portfolio</h2>
					<div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
						{#await data.stream.repos}
							{#each { length: 12 } as item}
								<div
									class="flex h-36 animate-pulse flex-col gap-1 rounded-sm bg-p p-4 text-slate-50"
								/>
							{/each}
						{:then repos}
							{#each repos as { homepage, name, description, html_url, full_name }}
								<div
									class="flex flex-col gap-1 rounded-sm bg-p p-4 text-slate-50"
								>
									<h3>
										<ExternalLink
											href={homepage ? homepage : html_url}
											icon="home"
										>
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
						{:catch}
							<p class="pt-0">
								<a href="https://github.com/rossrobino">
									View my portfolio on GitHub
								</a>
							</p>
						{/await}
					</div>
				</section>
				<section
					id="skills"
					class="grid grid-cols-1 gap-4 p-4 md:my-4 md:grid-cols-2"
				>
					<div>
						<h2>Languages</h2>
						<ul class="ml-6 mt-2 flex list-disc flex-col gap-2">
							<li>JavaScript</li>
							<li>TypeScript</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>SQL</li>
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
								<ExternalLink href="https://kit.svelte.dev/"
									>SvelteKit</ExternalLink
								>
							</li>
							<li>
								<ExternalLink href="https://astro.build/">Astro</ExternalLink>
							</li>
							<li>
								<ExternalLink href="https://supabase.com/"
									>Supabase</ExternalLink
								>
							</li>
							<li>
								<ExternalLink href="https://tailwindcss.com/"
									>tailwindcss</ExternalLink
								>
							</li>
						</ul>
					</div>
				</section>
			</article>
		</main>
		<footer
			id="contact"
			class="flex w-full bg-slate-50 font-semibold text-p md:justify-center md:py-4"
		>
			<ul class="flex flex-col gap-2 p-4 md:w-[768px]">
				<li>
					<ExternalLink href="mailto:ross@robino.dev" icon="envelope"
						>Email</ExternalLink
					>
				</li>
				<li>
					<ExternalLink href="https://github.com/rossrobino" icon="person"
						>GitHub</ExternalLink
					>
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
					<ExternalLink share href="https://robino.dev" />
				</li>
				{#await data.stream.views}
					<li>Loading views...</li>
				{:then views}
					<li class="flex items-center gap-1">
						{views} views
					</li>
				{/await}
			</ul>
		</footer>
	</div>
</div>
