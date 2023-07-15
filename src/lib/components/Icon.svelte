<script lang="ts">
	import Link from "$lib/svg/Link.svelte";
	import Book from "$lib/svg/Book.svelte";
	import Envelope from "$lib/svg/Envelope.svelte";
	import Person from "$lib/svg/Person.svelte";
	import Home from "$lib/svg/Home.svelte";

	export let icon = "link";
</script>

{#if icon === "link"}
	<Link />
{:else if icon === "book"}
	<Book />
{:else if icon === "envelope"}
	<Envelope />
{:else if icon === "person"}
	<Person />
{:else if icon === "home"}
	<Home />
{/if}
