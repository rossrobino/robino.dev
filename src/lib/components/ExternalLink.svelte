<script>
	import Icon from "$lib/components/Icon.svelte";
	import { ShareButton } from "@rossrobino/components";

	export let href = "/";
	let className = "";
	export { className as class };
	export let icon = "link";
	export let share = false;
</script>

{#if !share}
	<a
		{href}
		rel="external"
		class="flex gap-1.5 w-fit pr-8 hover:pr-2 group {className}"
	>
		<slot />
		{#if icon}
			<span class="hidden group-hover:flex items-center">
				<Icon {icon} />
			</span>
		{/if}
	</a>
{:else}
	<div class="flex gap-1.5 w-fit pr-8 hover:pr-2 group hover:cursor-pointer {className}">
		<ShareButton
			url={href}
			class="font-semibold underline underline-offset-4 decoration-indigo-500 hover:decoration-slate-500"
		/>
		{#if icon}
			<span class="hidden group-hover:flex items-center">
				<Icon icon="share" />
			</span>
		{/if}
	</div>
{/if}
