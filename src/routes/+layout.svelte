<script>
	import './styles.css';
	import './fonts.css';

	import Header from '../components/common/Header/Header.svelte';
	import Footer from '../components/common/Footer.svelte';
</script>

<div class="app">
	<Header />
	<slot />
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
