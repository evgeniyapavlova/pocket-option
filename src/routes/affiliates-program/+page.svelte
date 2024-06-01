<script>
	import meta_img from '$lib/images/meta__img__registration.jpg';

	import AffiliateProgramPage from '$comps/affiliates-program/AffiliateProgramPage.svelte';

	const title = 'Pocket Option Affiliate: Earn Money with the Best Affiliate Program';
	const desc =
		"Start earning with the Pocket Option Affiliate Program. Join now and get up to 50% of the broker's profits! Become a successful affiliate and earn passive income by promoting the popular Pocket Option trading platform. Sign up today and take advantage of the lucrative affiliate program.";
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

<AffiliateProgramPage />
