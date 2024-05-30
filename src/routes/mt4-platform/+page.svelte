<script>
	import meta_img from '$lib/images/meta__img__mt4_platform.jpg';

	import Mt4PlatformPage from '../../components/mt4-platform-page/MT4PlatformPage.svelte';

	const title = 'MT4 Platform Pocket Option';
	const desc =
		"Pocket Option's MT4 version is the go-to platform for traders as it provides an extensive range of charting tools, technical indicators and time frames.";
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

<Mt4PlatformPage />
