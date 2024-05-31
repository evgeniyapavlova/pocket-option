<script>
	import meta_img from '$lib/images/meta__img__min_dep.jpg';

	import MinimumDepositPage from '../../components/minimum-deposit-page/MinimumDepositPage.svelte';

	const title = 'Minimum Deposit - Pocket Option';
	const desc =
		'There are multiple payment methods available, and the minimum deposit and processing time may vary depending on the chosen payment method';
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

<MinimumDepositPage />
