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
	.desc {
		color: white;
		font-size: 20px;
		line-height: 1.4;
		margin-bottom: 100px;
		max-width: 760px;
	}

	@media screen and (min-width: 1201px) {
		.content {
			max-width: 844px;
		}
	}
	@media screen and (max-width: 1200px) {
		.desc {
			font-size: 18px;
		}
	}
	@media screen and (max-width: 960px) {
		.content {
			padding-top: 100px;
		}
	}
	@media screen and (max-width: 640px) {
		.desc {
			font-size: 16px;
		}
	}
</style>
