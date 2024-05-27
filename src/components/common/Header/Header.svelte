<script>
	import { onMount, onDestroy } from 'svelte';
	import { base } from '$app/paths';
	import Logo from '../../svg/Logo.svelte';
	import Menu from './MenuDesktop/MenuDesktop.svelte';
	import Hamburger from './Hamburger.svelte';
	import MenuMobile from './MenuMobile/MenuMobile.svelte';

	let scrolled = false;

	const handleScroll = () => {
		scrolled = window.scrollY > 0;
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', handleScroll);
		}
	});

	let isExpanded = false;
</script>

<header class:scrolled>
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
		z-index: 1000;
		transition: background-color 300ms linear;
		top: 0;
	}

	header.scrolled {
		background-color: var(--bgr);
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
