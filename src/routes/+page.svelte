<script lang="ts">
	import profilePic from "$lib/images/ross.webp";
	import Projects from "$lib/components/Projects.svelte";

	export let data;
</script>

<section class="prose prose-invert flex justify-center bg-primary p-8">
	<div
		class="grid max-w-screen-lg basis-full grid-cols-1 md:grid-cols-5 md:gap-4"
	>
		<div class="flex flex-col justify-center md:col-span-3">
			<div>
				<h1>Ross Robino</h1>
				<p>
					Welcome to my personal website. I work as a Business Innovation
					Analyst at PepsiCo. Some of my hobbies are skiing, running, and
					playing guitar.
				</p>
				<p>
					Check out my programming projects or contact me using the links below.
				</p>
			</div>
		</div>
		<div class="col-span-2">
			<img
				src={profilePic}
				alt="Ross at the top of Blarney Castle in Ireland."
				class="m-0 aspect-[3/4] rounded-sm"
			/>
		</div>
	</div>
</section>
{#if data.repos.length}
	<section class="flex justify-center p-8">
		<div class="max-w-screen-lg basis-full">
			<h2 class="mt-0">Projects</h2>
			<Projects repos={data.repos} />
		</div>
	</section>
{/if}
