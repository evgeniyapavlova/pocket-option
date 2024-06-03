<script>
	import meta_img from '$lib/images/meta_img_registration.jpg';

	import RegistrationPage from '../../components/registration-page/RegistrationPage.svelte';

	const title = 'Registering and Login Pocket Option in India - Guide 2024';
	const desc =
		'Discover an uncomplicated and thorough manual on registering and login Pocket Option in India.';
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

<RegistrationPage />
