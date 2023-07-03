<script lang="ts">
	import "../app.postcss";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	import profilePic from "$lib/images/ross.webp";
	import ExternalLink from "$lib/components/ExternalLink.svelte";
	import { ShareButton } from "@rossrobino/components";

	inject({ mode: dev ? "development" : "production" });

	export let data;
</script>

<div class="flex justify-center">
	<div
		class="prose prose-invert max-w-[75ch] p-8 text-white selection:bg-teal-700 prose-h3:my-0 prose-a:decoration-teal-500 prose-ul:list-none prose-ul:px-0 prose-li:px-0"
	>
		<header>
			<h1 class="font-mans font-normal">Ross Robino</h1>
		</header>
		<main>
			<section class="grid gap-4 md:grid-cols-2">
				<div class="order-last md:order-first">
					<h2>Welcome to my personal website</h2>
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
					class="aspect-[3/4] rounded-sm"
				/>
			</section>
			{#if data.repos.length}
				<section class="my-12">
					<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
						{#each data.repos as { homepage, name, description, html_url, full_name }}
							<a
								class="flex flex-col gap-1 rounded-sm bg-white bg-opacity-10 p-4 no-underline hover:bg-opacity-20"
								href={homepage ? homepage : html_url}
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
									<div>{description}</div>
								{/if}
								<div>
									<ExternalLink href={html_url} icon="book">
										{full_name}
									</ExternalLink>
								</div>
							</a>
						{/each}
					</div>
				</section>
			{/if}
		</main>
		<footer>
			<ul>
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
					<ShareButton
						class="mt-8 rounded-sm bg-teal-500 bg-opacity-20 px-4 py-2 hover:bg-opacity-30"
						url="https://robino.dev"
					/>
				</li>
			</ul>
		</footer>
	</div>
</div>
