<script>
	import './styles.css';
	import './fonts.css';

	import Header from '../components/common/Header/Header.svelte';
	import Footer from '../components/common/Footer.svelte';
	import Section7SpecialOffer from '../components/main-page/Section7SpecialOffer.svelte';
</script>

<div class="app">
	<Header />
	<slot />
	<Section7SpecialOffer />
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
