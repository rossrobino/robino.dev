<script lang="ts">
	import ProfilePicture from "./ProfilePicture.svelte";
</script>

<section id="about" class="grid grid-cols-1 gap-4 p-4 md:my-4 md:grid-cols-2">
	<div class="order-last flex flex-col justify-center md:order-first">
		<h2 class="text-emerald-500">Welcome to my personal website</h2>
		<p>
			I work as a Business Innovation Analyst at PepsiCo. Some of my hobbies are skiing, running,
			and playing guitar.
		</p>
		<p>Feel free to check out my web development projects or contact me using the links below.</p>
	</div>
	<ProfilePicture />
</section>
