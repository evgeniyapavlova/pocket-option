<script>
	import meta_img from '$lib/images/meta_img_download_android_app.jpg';

	import DownloadAndroidAppPage from '../../components/download-android-app-page/DownloadAndroidAppPage.svelte';

	const title = 'Download Android App for best Mobile Experience';
	const desc =
		'Get easy access to our Android app for a seamless mobile experience. Download now and enjoy services on the go!';
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

<DownloadAndroidAppPage />
