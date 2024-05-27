<script>
	import BlurDivider from './BlurDivider.svelte';
	import Button from '../common/Button.svelte';
</script>

<section>
	<div class="main-container">
		<h1>
			<span>Pocket Option Broker</span> —
			<span>Online Trading</span>
		</h1>
		<span class="caption">Make profits, join now!</span>
		<Button>Sign up</Button>
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
		background: no-repeat url('/images/main-page/monitor_2x_2.png');
		background-size: cover;
		width: 100%;
		padding-bottom: 60%;
		margin: 31px auto 0;
	}
	section {
		position: relative;
		text-align: center;
		padding: 140px 24px 125px;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url('/images/main-page/intro-bgr.jpg');
		background-position: 50% 50%;
	}
	h1 {
		font-size: 36px;
		line-height: 1.2;
		font-weight: 700;
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
		h1 {
			font-size: 34px;
		}
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
			font-size: 28px;
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
			font-size: 24px;
			margin-bottom: 16px;
		}
		.caption {
			font-size: 14px;
		}
		.screen-image-wrap {
			width: 240px;
		}
		.screen-image {
			background-image: url('/images/main-page/iphone-img_2x_2.png');
			padding-bottom: 204%;
		}
		section {
			padding-bottom: 100px;
			padding-left: 0;
			padding-right: 0;
		}
	}
</style>
