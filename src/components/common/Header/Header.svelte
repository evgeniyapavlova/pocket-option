<script>
	import { base } from '$app/paths';
	import Logo from '../../svg/Logo.svelte';
	import Menu from './MenuDesktop/MenuDesktop.svelte';
	import Hamburger from './Hamburger.svelte';
	import MenuMobile from './MenuMobile/MenuMobile.svelte';
	let isExpanded = false;
</script>

<header>
	<div class="header-container">
		<div class="layout">
			<a href={base}>
				<Logo />
			</a>
			<Hamburger bind:isExpanded />
			<MenuMobile {isExpanded} />
			<Menu />
		</div>
	</div>
</header>

<style>
	.header-container {
		max-width: 1240px;
		width: 100%;
		margin: 0 auto;
		padding: 0 20px;
	}
	header {
		background-color: rgba(1, 11, 28, 0);
		position: fixed;
		width: 100%;
		z-index: 1;
		transition: background-color 300ms linear;
		top: 0;
	}

	a {
		display: block;
		z-index: 999;
	}
	.layout {
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
