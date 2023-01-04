<script>
	const links = [
		{ text: "About", link: "#about" },
		{ text: "Portfolio", link: "#portfolio" },
		{ text: "Skills", link: "#skills" },
		{ text: "Contact", link: "#contact" },
	];
</script>

<header class="w-full top-0 sticky text-p bg-slate-50 md:flex justify-center">
	<div class="flex justify-between flex-col md:flex-row p-4 md:w-[768px]">
		<h1><a class="no-underline font-mans" href="/">Ross Robino</a></h1>
		<nav class="mt-2 md:mt-0">
			<ul class="h-full flex flex-wrap gap-4 items-center">
				{#each links as link}
					<li>
						<a href={link.link}>{link.text}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
