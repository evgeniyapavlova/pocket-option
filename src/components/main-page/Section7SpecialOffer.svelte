<script>
	import Button from '../common/Button.svelte';
</script>

<section>
	<div class="content">
		<div class="text-content">
			<h2>Special Registration Offer</h2>
			<div class="text">
				Take the first step towards successful trading with PocketOption. Register today using the
				promocode and enjoy exclusive benefits tailored just for you. Don't miss out on this unique
				opportunity to join the trading platform trusted by thousands.
			</div>

			<div class="text text-2">
				Join PocketOption today and embark on your trading journey with a partner that prioritizes
				your success, safety, and satisfaction. We're more than just a trading platform; we're your
				gateway to financial success. Click here to register now!
			</div>
			<Button>Start trading</Button>
		</div>
	</div>
</section>

<style>
	section {
		position: relative;
		z-index: 1;
		background-image: url('/images/main-page/offer.png');
		background-repeat: no-repeat;
		background-position: left calc(50% + 300px) bottom -40%;
	}
	.content {
		padding-top: 200px;
		padding-bottom: 200px;
	}
	.text-content {
		width: 50%;
	}
	.text {
		margin-bottom: 30px;
	}
	.text-2 {
		width: 80%;
	}
	@media screen and (max-width: 1200px) {
		section {
			background-size: 686px 642px;
			background-position: left calc(50% + 250px) bottom -40%;
		}
		.content {
			padding-bottom: 115px;
		}
	}

	@media screen and (max-width: 960px) {
		.content {
			padding-top: 90px;
			padding-bottom: 150px;
		}
		section {
			background-size: 619px 579px;
		}
		.text-content {
			width: 400px;
		}
	}

	@media screen and (max-width: 640px) {
		section {
			background-size: 519px 485px;
			padding-bottom: 340px;
			background-position: left 50% bottom 0;
		}
		.text-content {
			width: 100%;
			text-align: center;
		}
		.text-2 {
			width: 100%;
		}
	}
	@media screen and (max-width: 480px) {
		.content {
			padding-top: 130px;
		}
	}
</style>
