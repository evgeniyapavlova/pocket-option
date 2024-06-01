<script>
	import meta_img from '$lib/images/meta__img__registration.jpg';

	import SocialTradingPage from '$comps/social-trading-page/SocialTradingPage.svelte';

	const title = 'Social Trading - Pocket Option';
	const desc =
		'Social trading is a unique feature of our platform, allowing users to track progress, view rankings, and automatically copy the trades of the most successful traders.';
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

<SocialTradingPage />
