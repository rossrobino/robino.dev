<script lang="ts">
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
		class="group flex w-fit gap-1.5 pr-8 hover:pr-2 {className}"
	>
		<slot />
		{#if icon}
			<span class="hidden items-center group-hover:flex">
				<Icon {icon} />
			</span>
		{/if}
	</a>
{:else}
	<div
		class="group flex w-fit gap-1.5 pr-8 hover:cursor-pointer hover:pr-2 {className}"
	>
		<ShareButton
			url={href}
			class="font-semibold underline decoration-indigo-500 underline-offset-4 hover:decoration-slate-500"
		/>
		{#if icon}
			<span class="hidden items-center group-hover:flex">
				<Icon icon="share" />
			</span>
		{/if}
	</div>
{/if}
