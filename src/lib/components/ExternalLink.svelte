<script>
	import Link from "$lib/svg/Link.svelte";
	import Book from "$lib/svg/Book.svelte";
	import Envelope from "$lib/svg/Envelope.svelte";
	import Person from "$lib/svg/Person.svelte";
	import Home from "$lib/svg/Home.svelte";

	export let href = "/";
	let className = "";
	export { className as class };
	export let icon = "link";
</script>

<a {href} rel="external" class="flex gap-2 group {className}">
	<slot />
	{#if icon}
		<span class="hidden group-hover:flex items-center">
			{#if icon === "link"}
				<Link />
			{:else if icon === "book"}
				<Book />
			{:else if icon == "envelope"}
				<Envelope />
			{:else if icon == "person"}
				<Person />
			{:else if icon == "home"}
				<Home />
			{/if}
		</span>
	{/if}
</a>
