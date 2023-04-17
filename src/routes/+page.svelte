<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import About from "$lib/components/about/About.svelte";
	import Portfolio from "$lib/components/portfolio/Portfolio.svelte";
	import Skills from "$lib/components/skills/Skills.svelte";
	import Footer from "$lib/components/Footer.svelte";

	export let data;
</script>

<div
	class="min-w-[280px] bg-p bg-[url('/images/background.webp')] md:flex md:justify-center"
>
	<div class="flex min-h-[100dvh] w-full flex-col items-center">
		<Header />
		<main class="flex-1 md:w-[768px]">
			<article>
				<About />
				<Portfolio repos={data.repos} />
				<Skills />
			</article>
		</main>
		<Footer />
	</div>
</div>
