<script>
	import meta_img from '$lib/images/meta_img_tournaments.jpg';

	import TournamentsPage from '$comps/tournaments-page/TournamentsPage.svelte';

	const title = 'Tournaments - Pocket Option';
	const desc =
		'Tournaments on the Pocket Option platform consist of a closed group of users trading the same asset with an identical starting balance.';
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

<TournamentsPage />
