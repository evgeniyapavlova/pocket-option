<script>
	import meta_img from '$lib/images/meta_img_desktop_app.jpg';

	import DesktopAppPage from '../../components/desktop-app-page/DesktopAppPage.svelte';

	const title = 'Pocket Option Desktop App for PC / Mac / Windows';
	const desc =
		'Download the Pocket Option desktop app today and start trading with ease. Take your trading to the next level, execute trades quickly and securely, and stay updated with real-time market data.';
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

<DesktopAppPage />
