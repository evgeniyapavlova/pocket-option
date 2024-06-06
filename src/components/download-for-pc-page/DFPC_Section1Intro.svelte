<script>
	import BlurDivider from '../common/BlurDivider.svelte';
	import Button from '../common/Button.svelte';
</script>

<section class="intro">
	<div class="content">
		<div class="text-content">
			<h1>Pocket Option Download&nbsp;for&nbsp;PC Guide&nbsp;2024</h1>
			<div class="text">
				Download the official PocketOption app for your Windows device to gain instant access to
				advanced trading features from anywhere in the world.
			</div>
			<Button>Start trading</Button>
		</div>
		<div class="screen-image-wrap">
			<div class="screen-image"></div>
		</div>
	</div>
	<BlurDivider />
</section>

<style>
	.text-content {
		max-width: 550px;
		margin: 0 auto;
	}
	section {
		background-image: url('/images/main-page/intro-bgr.webp');
		position: relative;
	}
	h1 {
		margin-bottom: 40px;
	}
	.text {
		margin-bottom: 25px;
		color: white;
	}
	.screen-image {
		background: no-repeat url('/images/download-for-pc/intro-img.png');
		background-size: cover;
		width: 100%;
		padding-bottom: 42%;
		margin: 31px auto 0;
	}
	.screen-image-wrap {
		width: 100%;
		max-width: 950px;
		margin: 70px auto 0;
	}

	@media screen and (max-width: 1200px) {
		section {
			padding-bottom: 40px;
		}
		.screen-image-wrap {
			margin-top: 50px;
		}
	}
</style>
