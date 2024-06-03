<script>
	import meta_img from '$lib/images/meta_img_how_to_use.jpg';

	import HowToUsePage from '$comps/how-to-use-page/HowToUsePage.svelte';

	const title = 'How To Use - Pocket Option';
	const desc =
		'To start trading, you first need to register on Pocket Option. You can find detailed registration instructions on this page. Fund your account and start trading.';
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

<HowToUsePage />
