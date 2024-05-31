<script>
	import meta_img from '$lib/images/meta__img__demo_account.jpg';

	import DepositMethodsPage from '$comps/deposit-methods-page/DepositMethodsPage.svelte';

	const title = 'Deposit Methods - Pocket Option';
	const desc = 'In Pocket Option there are various methods available for depositing funds.';
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

<DepositMethodsPage />
