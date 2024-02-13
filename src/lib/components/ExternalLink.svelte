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
	class="group m-0 flex w-fit gap-1.5 pr-8 hover:pr-2 {className}"
>
	<slot />
	<div class="flex scale-0 items-center transition group-hover:scale-100">
		<Icon {icon} />
	</div>
</a>
