<script>
	import MainPage from '../components/main-page/MainPage.svelte';
	import { onMount } from 'svelte';
	import { reg_link } from '../lib/stores/reg_link';
	import meta_img from '$lib/images/meta__img.jpg';

	const title = 'Pocket Option Broker — Best Trading Platform in India';
	const desc =
		'Pocket Option is an online trading broker that provides 24/7 access to over 100 trading instruments and a deposit bonus. Register today!';

	function getURLParameters() {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		return Object.fromEntries(urlParams.entries());
	}

	function updateLinks() {
		const parameters = getURLParameters();
		const linkHref = $reg_link;
		const [url, query] = linkHref.split('?');
		const queryParams = new URLSearchParams(query);

		for (const [key, value] of Object.entries(parameters)) {
			queryParams.set(key, value);
		}
		const updatedHref = url + '?' + queryParams.toString();
		reg_link.set(updatedHref);
	}

	onMount(() => {
		updateLinks();
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={meta_img} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={meta_img} />
</svelte:head>

<MainPage />
