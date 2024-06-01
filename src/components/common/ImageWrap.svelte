<script>
	import Modal from './Modal/Modal.svelte';
	import { base } from '$app/paths';
	export let imageH,
		path,
		imageW = 760,
		fullImage = [1680, 770];

	const paddingBottom = Math.round(imageH / (imageW / 100));

	let showModal = false;
</script>

<div
	class="image-wrap"
	style="max-width: {imageW}px; height: calc((100vw - 48px) * {paddingBottom / 100});"
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		role="button"
		class="image"
		style="background-image:url('{base}/images{path}'); padding-bottom: {paddingBottom}%;"
		on:click={() => {
			showModal = true;
		}}
		tabindex="0"
	/>
</div>

<Modal bind:showModal {fullImage}>
	<img class="inside-modal-image" src="{base}/images{path}" alt="" />
</Modal>

<style>
	.inside-modal-image {
		max-width: 100%;
		max-height: 100%;
	}
	.image-wrap {
		margin-top: 30px;
		margin-bottom: 30px;
	}
	.image {
		cursor: pointer;
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
