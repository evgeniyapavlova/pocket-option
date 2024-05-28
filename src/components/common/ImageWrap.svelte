<script>
	import { base } from '$app/paths';
	export let imageH, imageIdx;

	const paddingBottom = Math.round(imageH / 7.6);
</script>

<div class="image-wrap">
	<div
		class="image"
		style="background-image:url('{base}/images/registration-page/process_img{imageIdx}.jpg'); padding-bottom: {paddingBottom}%;"
	></div>
</div>

<style>
	.image-wrap {
		max-width: 760px;
		margin-top: 25px;
	}
	.image {
		width: 100%;
		background-size: cover;
	}

	@media screen and (max-width: 480px) {
		.image-wrap {
			height: calc((100vw - 48px) * 0.47 + 25px);
		}
		.image {
			position: absolute;
			left: 24px;
			width: calc(100vw - 48px);
		}
	}
</style>
