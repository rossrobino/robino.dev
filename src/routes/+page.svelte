<script lang="ts">
	import "../app.postcss";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	import profilePic from "$lib/images/ross.webp";
	import ExternalLink from "$lib/components/ExternalLink.svelte";
	import { ShareButton } from "@rossrobino/components";
	import Star from "$lib/svg/Star.svelte";

	inject({ mode: dev ? "development" : "production" });

	export let data;

	const features = ["stargazers_count", "created_at", "pushed_at"] as const;

	let currentFeature = "stargazers_count";

	const sortRepos = (feature: (typeof features)[number]) => {
		const sort = () => {
			if (feature === "created_at" || feature === "pushed_at") {
				data.repos.sort(
					(a, b) =>
						new Date(String(b[feature])).valueOf() -
						new Date(String(a[feature])).valueOf(),
				);
			} else if (feature === "stargazers_count") {
				data.repos.sort((a, b) => {
					return Number(b[feature]) - Number(a[feature]);
				});
			}
			currentFeature = feature;
			data.repos = data.repos;
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

<div class="flex justify-center font-humanist">
	<div
		class="prose prose-invert max-w-screen-lg p-8 text-white selection:bg-teal-700 prose-h3:my-0 prose-a:decoration-teal-500 prose-ul:list-none prose-ul:px-0 prose-li:px-0"
	>
		<header>
			<h1>Ross Robino</h1>
		</header>
		<main>
			<section class="mb-12 grid md:grid-cols-3 md:gap-4">
				<div class="flex flex-col justify-center md:col-span-2">
					<h2 class="text-wrap-balance mt-4 text-5xl">
						Welcome to my personal website
					</h2>
					<p>
						I work as a Business Innovation Analyst at PepsiCo. Some of my
						hobbies are skiing, running, and playing guitar.
					</p>
					<p>
						Check out my programming projects or contact me using the links
						below.
					</p>
				</div>
				<div class="flex h-full flex-col justify-center">
					<img
						src={profilePic}
						alt="Ross at the top of Blarney Castle in Ireland."
						class="aspect-[3/4] rounded-sm"
					/>
				</div>
			</section>
			{#if data.repos.length}
				<section class="mb-24">
					<div class="flex flex-wrap gap-2 py-4">
						{#each features as feature}
							<div>
								<button
									class="h-full rounded-sm px-4 py-2 capitalize transition hover:bg-teal-500 hover:bg-opacity-30 active:scale-95 active:bg-opacity-20 disabled:hover:bg-transparent"
									disabled={currentFeature === feature}
									on:click={() => sortRepos(feature)}
								>
									{feature.split("_").join(" ")}
								</button>
								{#if currentFeature === feature}
									<div
										style="view-transition-name: selectedFilter;"
										class="bg-teal-500 p-[0.06rem]"
									/>
								{/if}
							</div>
						{/each}
					</div>
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{#each data.repos as { homepage, name, description, html_url, full_name, stargazers_count }}
							<div
								class="flex flex-col justify-between gap-1 rounded-sm bg-white bg-opacity-10 p-4"
								style="view-transition-name: repo-{name};"
							>
								<div>
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
				</section>
			{/if}
		</main>
		<footer class="mb-12">
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
						class="mt-2 rounded-sm bg-teal-500 bg-opacity-20 px-4 py-2 transition hover:bg-opacity-30 active:scale-95 active:bg-opacity-20"
						url="https://robino.dev"
					/>
				</li>
			</ul>
		</footer>
	</div>
</div>

<style lang="postcss">
	.text-wrap-balance {
		text-wrap: balance;
	}
</style>
