<script>
	import meta_img from '$lib/images/meta__img__demo_account.jpg';

	import DemoAccountPage from '../../components/demo-account-page/DemoAccountPage.svelte';

	const title = 'Discover the Excitement of Trading with Pocket Option Demo Account';
	const desc =
		'Unleash the potential of online trading with a Pocket Option demo account. Register today and experience the Pocket Option demo for yourself!';
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

<DemoAccountPage />
