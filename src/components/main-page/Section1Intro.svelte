<script>
	import BlurDivider from '../common/BlurDivider.svelte';
	import Button from '../common/Button.svelte';
</script>

<section class="intro">
	<div class="content">
		<h1>
			<span>Pocket Option Broker</span> —
			<span>Online Trading</span>
		</h1>
		<span class="caption">Make profits, join now!</span>
		<Button>Sign up</Button>
	</div>
	<div class="main-container">
		<div class="screen-image-wrap">
			<div class="screen-image"></div>
		</div>
	</div>
	<BlurDivider />
</section>

<style>
	h1 span {
		white-space: nowrap;
	}
	.screen-image-wrap {
		width: 800px;
		margin: 0 auto;
	}
	.screen-image {
		background: no-repeat url('/images/main-page/monitor_2x_2.webp');
		background-size: cover;
		width: 100%;
		padding-bottom: 60%;
		margin: 31px auto 0;
	}
	section {
		position: relative;
		background-image: url('/images/main-page/intro-bgr.webp');
		padding-left: 24px;
		padding-right: 24px;
		padding-bottom: 125px;
	}
	h1 {
		margin-bottom: 15px;
	}
	.caption {
		font-size: 20px;
		font-weight: 400;
		line-height: 1.2;
		display: block;
		margin-bottom: 15px;
	}

	@media screen and (max-width: 1024px) {
		.caption {
			font-size: 16px;
			margin-bottom: 20px;
		}
		.screen-image-wrap {
			width: 62%;
		}
		section {
			padding-bottom: 70px;
		}
	}
	@media screen and (max-width: 768px) {
		h1 {
			margin-bottom: 10px;
		}
		.caption {
			font-size: 15px;
		}
		.screen-image {
			margin-top: 50px;
		}
		.screen-image-wrap {
			width: 80%;
		}
		section {
			padding-bottom: 127px;
		}
	}
	@media screen and (max-width: 480px) {
		h1 {
			margin-bottom: 16px;
		}
		.caption {
			font-size: 14px;
		}
		.screen-image-wrap {
			width: 240px;
		}
		.screen-image {
			background-image: url('/images/main-page/iphone-img_2x_2.webp');
			padding-bottom: 204%;
		}
		section {
			padding-bottom: 100px;
			padding-left: 0;
			padding-right: 0;
		}
	}
</style>
