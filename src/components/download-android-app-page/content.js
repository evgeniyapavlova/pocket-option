import tags from '$common/DisplayAnyContent/tagsMap';

export default [
	{ tag: tags.h2, text: 'How to Install the App' },
	{
		tag: tags.text,
		text: 'To install the Pocket Option app on your Android device and start online trading, follow these steps:'
	},
	{
		tag: tags.ol_text,
		text: [
			'Open the Google Play Store on your Android device.',
			'In the search bar, enter "Pocket Option Broker" and locate the official mobile app.',
			'Click "Install" to download and install the app.',
			'Wait for the installation to complete.'
		]
	},
	{ tag: tags.h2, text: 'How to Register' },
	{ tag: tags.text, text: 'To register within the mobile app:' },
	{
		tag: tags.ol_text,
		text: [
			'Open the Pocket Option app and initiate the registration process.',
			'Tap on the "Open an Account" button.',
			'Enter a valid email address.',
			'Create a strong password.',
			'Read and agree to the terms of the user agreement.',
			'Click "Register".'
		]
	},
	{
		tag: tags.text,
		text: 'Congratulations! You now have an account, and you can start trading. You can choose to use a demo account to get familiar with the platform and refine your trading skills on various assets without any risk. If you already have an account on this platform, simply log in on your Android device. '
	}
];
