<script>
	import { base } from '$app/paths';
	export let imageH, path;

	const paddingBottom = Math.round(imageH / 7.6);
</script>

<div class="image-wrap" style="height: calc((100vw - 48px) * {paddingBottom / 100});">
	<div
		class="image"
		style="background-image:url('{base}/images{path}'); padding-bottom: {paddingBottom}%;"
	/>
</div>

<style>
	.image-wrap {
		max-width: 760px;
		margin-top: 30px;
		margin-bottom: 30px;
	}
	.image {
		width: 100%;
		background-size: contain;
		background-repeat: no-repeat;
	}

	@media screen and (min-width: 480px) {
		.image-wrap {
			height: auto !important;
		}
	}
	@media screen and (max-width: 480px) {
		.image {
			position: absolute;
			left: 24px;
			width: calc(100vw - 48px);
		}
	}
</style>
