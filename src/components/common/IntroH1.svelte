<script>
	import BlurDivider from './BlurDivider.svelte';
	import Button from './Button.svelte';

	export let bgrImg,
		btnText = 'Start trading';
</script>

<section class="intro" style="background-image: url('{bgrImg}');">
	<div class="content">
		<h1>
			<slot />
		</h1>
		<Button>{btnText}</Button>
	</div>
	<BlurDivider />
</section>

<style>
	h1 {
		margin-bottom: 25px;
	}
	section.intro {
		padding-top: 230px;
		padding-bottom: 150px;

		position: relative;
	}
	@media screen and (max-width: 640px) {
		section {
			padding-bottom: 100px;
		}
	}
</style>
