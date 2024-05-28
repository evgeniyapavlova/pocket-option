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
		margin-bottom: 80px;
		max-width: 740px;
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

	@media screen and (max-width: 480px) {
		.content {
			text-align: center;
		}
	}
</style>
