<script>
	import ExternalLink from "$lib/components/ExternalLink.svelte";
</script>

<footer
	id="contact"
	class="bg-slate-50 text-p w-full font-semibold flex md:justify-center md:py-4"
>
	<ul class="p-4 md:w-[768px] flex flex-col gap-2">
		<li>
			<ExternalLink href="mailto:ross@robino.dev" icon="envelope">
				Email
			</ExternalLink>
		</li>
		<li>
			<ExternalLink href="https://github.com/rossrobino" icon="person">
				GitHub
			</ExternalLink>
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
