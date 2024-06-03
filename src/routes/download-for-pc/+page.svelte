<script>
	import meta_img from '$lib/images/meta_img_download_for_pc.jpg';

	import DownloadForPcPage from '../../components/download-for-pc-page/DownloadForPCPage.svelte';

	const title = 'PPocket Option Download for PC — Windows. Guide 2024';
	const desc =
		'Download Pocket Option for PC and enjoy seamless trading experience with advanced features and tools. ';
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

<DownloadForPcPage />
