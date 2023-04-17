<script lang="ts">
	const links = [
		{ text: "About", link: "#about" },
		{ text: "Portfolio", link: "#portfolio" },
		{ text: "Skills", link: "#skills" },
		{ text: "Contact", link: "#contact" },
	];
</script>

<header class="sticky top-0 w-full justify-center bg-slate-50 text-p md:flex">
	<div class="flex flex-col justify-between p-4 md:w-[768px] md:flex-row">
		<h1><a class="font-mans no-underline" href="/">Ross Robino</a></h1>
		<nav class="mt-2 md:mt-0">
			<ul class="flex h-full flex-wrap items-center gap-4">
				{#each links as link}
					<li>
						<a href={link.link}>{link.text}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
