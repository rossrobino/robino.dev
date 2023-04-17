<script lang="ts">
	import ExternalLink from "$lib/components/ExternalLink.svelte";
</script>

<footer
	id="contact"
	class="flex w-full bg-slate-50 font-semibold text-p md:justify-center md:py-4"
>
	<ul class="flex flex-col gap-2 p-4 md:w-[768px]">
		<li>
			<ExternalLink href="mailto:ross@robino.dev" icon="envelope"
				>Email</ExternalLink
			>
		</li>
		<li>
			<ExternalLink href="https://github.com/rossrobino" icon="person"
				>GitHub</ExternalLink
			>
		</li>
		<li>
			<ExternalLink
				href="https://www.linkedin.com/in/rossrobino/"
				icon="person"
			>
				LinkedIn
			</ExternalLink>
		</li>
		<li>
			<ExternalLink share href="https://robino.dev" />
		</li>
	</ul>
</footer>
