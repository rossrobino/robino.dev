<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import type { Snippet } from "svelte";

	let {
		icon = "link",
		href = "/",
		class: className = "",
		children,
	}: {
		icon?: string;
		href?: string;
		class?: string;
		children: Snippet;
	} = $props();
</script>

<a
	{href}
	rel="external"
	class="group m-0 flex w-fit gap-1.5 pr-8 hover:pr-2 {className}"
>
	{@render children()}
	<div class="flex scale-0 items-center transition group-hover:scale-100">
		<Icon {icon} />
	</div>
</a>
