export default {
	text_1:
		'Social trading is a unique feature of our platform, allowing users to track progress, view rankings, and automatically copy the trades of the most successful traders.',
	h2_1: 'Top-Rated Trades',
	text_2:
		'The section displays the profits made by other platform users. The rating updates every minute, showcasing the most profitable trading orders.',
	h2_2: 'Best Traders In The Last 24 Hours',
	text_3:
		'In the section, you can find the ratings of the most successful traders within the last day.',
	h2_3: 'Copy Trader',
	text_4:
		"The section displays all the traders you are copying. If the list is empty, you can find a trader to copy or view by clicking 'View Top Traders.'",
	text_5: "To adjust copying settings, select a trader in Social Trading and click 'Copy Trades.'",
	h2_4: 'Copying Proportionally',
	text_6:
		'The setting adjusts the proportion of the copied trade relative to the original. For example, with 60% copying, a $ 100 trade will open a $ 60 trade while maintaining the percentage of profit.',
	h2_5: 'Stop Balance',
	text_7:
		'The setting sets the account balance level at which copying will stop; you can also manually stop copying.',
	h2_6: 'Minimum And Maximum Trade Amount',
	text_8: 'The setting establishes the minimum and maximum amounts for copied trades.',
	text_9: "To save changes in the copying settings, click 'Confirm.'",
	hightlight_1:
		'<span>Attention:</span> Remember, you can only copy the original trades of the selected trader; you cannot copy an already copied trade.',
	h2_7: 'Example Of Copy Settings',
	text_10: 'Let’s look at the following example of copy settings:',
	list_1: [
		'<b>Copying Proportion:</b> 60%, which means 60% of the original trading orders.',
		'<b>Stop Balance:</b> $ 70, automatic copying stops at a balance of $ 70 or less.',
		'<b>Minimum Trade Amount:</b> $ 6, the minimum amount for copying on your account is $ 6 (or $ 10 with the copying proportion).',
		'<b>Maximum Trade Amount:</b> $ 75, the maximum amount for copying on your account is $ 75 (or $ 125 with the copying proportion).'
	],
	text_10_1: 'Here are a few interpretations and explanations:',
	list_2: [
		{
			text: 'If the initial trade amount is $ 20, the resulting trade will be copied.',
			list: [
				'60% of $ 20 is $ 12.',
				'The minimum trade amount for copying is $ 6, and 60% of the initial amount ($ 10) is within this range.',
				'The maximum trade amount for copying is $ 75, and 60% of the initial amount ($ 125) is also within this range.'
			]
		},
		{
			text: 'If the initial trade amount is $ 3, the resulting trade will NOT be copied.',
			list: [
				'60% of $ 3 is $ 1.8.',
				'The minimum trade amount for copying is $ 6, and 60% of the initial amount ($ 10) — $ 3 is not within this range.',
				'The maximum trade amount for copying is $ 75, and 60% of the initial amount ($ 125) — $ 3 is within this range.'
			]
		},
		{
			text: 'If the initial trade amount is $ 215, the resulting trade will NOT be copied.',
			list: [
				'60% of $ 3 is $ 129.',
				'The minimum trade amount for copying is $ 6, and 60% of the initial amount ($ 10) — $ 215 is within this range.',
				'The maximum trade amount for copying is $ 75, and 60% of the initial amount ($ 125) — $ 215 is not within this range.'
			]
		}
	],
	text_11:
		'This will help determine whether the trade will be copied. However, the exact reason why the trade was not copied can be found in the social trading profile history.',
	hightlight_2:
		'<span>Attention:</span> Also, remember that copying trades with a total amount less than $ 1 is prohibited, and violating this rule can lead to the social trading service being blocked.',
	list_3: [
		{
			h2: 'Search For Traders',
			list_text: [
				'You can also find the desired traders there — the search results display only those traders who have at least one trade in the last 24 hours.'
			]
		},
		{
			h2: 'List Of Copied Traders',
			list_text: [
				"In the 'List of Copied Traders' section, you can find a complete list of those you’ve copied or copied previously. If the list is empty, the 'View Top Traders' button will help start copying the desired trader."
			]
		},
		{
			h2: 'Disable Copying',
			list_text: [
				"If the list is empty, the 'View Top Traders' button will help start copying the desired trader",
				"You can also turn off automatic copying by selecting a trader from the list and clicking 'Stop Copying.' This will not cancel already placed trades."
			]
		},
		{
			h2: 'List Of Watched Traders',
			list_text: [
				"The 'List of Watched Traders' provides a complete list of those you’ve copied or observed previously. If the list is empty, the 'View Top Traders' button will help start observing the desired trader."
			]
		},
		{
			h2: 'Setting Up Social Trading',
			list_text: [
				"Social trading settings contain parameters affecting the functionality and visual aspects of the service. Enabling 'Social Trading' will display other users' trades on the chart. The 'Watching Copied Traders' button automatically adds copied users to your watchlist. You can hide your profile if you don’t want others to copy your trading orders. 'Show Only Watched Traders' on the chart will display only those you’re observing."
			]
		}
	]
};
