<script lang="ts">
	import profilePic from "$lib/images/ross.webp";
	import Projects from "$lib/components/Projects.svelte";

	export let data;
</script>

<section class="prose prose-invert flex justify-center bg-primary p-8">
	<div
		class="grid max-w-screen-lg basis-full grid-cols-1 md:grid-cols-5 md:gap-6"
	>
		<div class="flex flex-col justify-center md:col-span-3">
			<div>
				<h1>Ross Robino</h1>
				{@html data.readme}
			</div>
		</div>
		<div class="col-span-2 flex items-center">
			<img
				src={profilePic}
				alt="Ross at the top of Blarney Castle in Ireland."
				class="m-0 aspect-[3/4] rounded"
			/>
		</div>
	</div>
</section>
{#if data.repos}
	<section class="flex justify-center p-8">
		<div class="max-w-screen-lg basis-full">
			<h2 class="mt-0">Projects</h2>
			<Projects repos={data.repos} />
		</div>
	</section>
{/if}
