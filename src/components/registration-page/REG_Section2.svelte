<script>
	import { section2 } from './content';
</script>

<div class="content">
	{#each section2 as { title, text }}
		<h2>{@html title}</h2>
		<div class="desc">{text}</div>
	{/each}
</div>

<style>
	.content {
		padding-top: 120px;
	}

	@media screen and (min-width: 1201px) {
		.content {
			max-width: 844px;
		}
	}
	@media screen and (max-width: 960px) {
		.content {
			padding-top: 100px;
		}
	}
</style>
