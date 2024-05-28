<script>
	import BlurDivider from '../common/BlurDivider.svelte';
	import Button from '../common/Button.svelte';
</script>

<section class="intro">
	<div class="content">
		<h1>
			Pocket Option <br />Desktop App
		</h1>
		<Button>Start trading</Button>
	</div>
	<BlurDivider />
</section>

<style>
	h1 {
		margin-bottom: 25px;
	}
	section {
		padding-top: 230px;
		padding-bottom: 150px;
		background-image: url('/images/desktop-app-page/intro-bgr.jpg');
		position: relative;
	}
	@media screen and (max-width: 640px) {
		section {
			padding-bottom: 100px;
		}
	}
</style>
