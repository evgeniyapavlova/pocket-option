<script>
	import Button from '../common/Button.svelte';
</script>

<div class="content">
	<div class="globus-image-wrap">
		<div class="globus-image"></div>
	</div>
	<div class="text-content">
		<h2>Reputation and Client Satisfaction</h2>
		<div class="text">
			Our reputation speaks volumes. With thousands of satisfied clients globally, the reviews and
			recommendations for Pocket Option are overwhelmingly positive. Whether you're a seasoned
			trader or just starting out, our commitment to excellence ensures that our clients' needs are
			always met.
			<br />
			<br />
			Join the community of successful traders who trust PocketOption for their investment needs.
		</div>
		<Button>Join now</Button>
	</div>
</div>

<style>
	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 80px;
	}
	.text {
		margin-bottom: 30px;
	}
	.globus-image-wrap,
	.text-content {
		width: 50%;
	}
	.globus-image-wrap {
		position: relative;
		max-width: 529px;
		width: 100%;
	}
	.globus-image {
		background-image: url('/images/main-page/reputation.png');
		background-repeat: no-repeat;
		padding-bottom: 94%;
		width: 100%;
		background-position: center center;
		background-size: cover;
	}
	.text-content {
		padding-right: 24px;
	}
	@media screen and (max-width: 960px) {
		.text {
			margin-bottom: 20px;
		}
		.content {
			display: block;
		}
		.globus-image-wrap,
		.text-content {
			width: 100%;
		}
		.globus-image-wrap {
			max-width: 350px;
			margin: 0 auto;
			margin-bottom: 10px;
		}
		.text-content {
			padding-right: 0;
		}
	}

	@media screen and (max-width: 480px) {
		.text {
			margin-bottom: 25px;
		}
		.text-content {
			text-align: center;
		}
		.globus-image-wrap {
			max-width: 400px;
		}
	}
</style>
