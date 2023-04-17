<script lang="ts">
	import "../app.postcss";
</script>

<svelte:head>
	<script
		async
		src="https://www.googletagmanager.com/gtag/js?id=G-VTNMKYJH7T"
	></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag("js", new Date());

		gtag("config", "G-VTNMKYJH7T");
	</script>
</svelte:head>

<slot />
