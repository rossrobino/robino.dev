<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";

	export let href = "/";
	let className = "";
	export { className as class };
	export let icon = "link";
</script>

<a
	{href}
	rel="external"
	class="group flex w-fit gap-1.5 pr-8 hover:pr-2 {className}"
>
	<slot />
	{#if icon}
		<span class="hidden items-center group-hover:flex">
			<Icon {icon} />
		</span>
	{/if}
</a>
