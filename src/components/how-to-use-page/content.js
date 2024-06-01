import tags from '$common/DisplayAnyContent/tagsMap';

export default [
	{
		tag: tags.text,
		text: 'To start trading, you first need to register on Pocket Option. You can find detailed registration instructions on this page. Fund your account and start trading.'
	},
	{ tag: tags.h2, text: 'Placing A Trading Order' },
	{
		tag: tags.text,
		text: 'The trading panel allows you to adjust parameters such as purchase time and trade amount. Here, you place a trade by trying to predict whether the price will go up (green button) or down (red button).'
	},
	{ tag: tags.h3, text: 'Select Assets' },
	{
		tag: tags.text,
		text: 'You can choose from over a hundred assets available on the platform, such as currency pairs, cryptocurrencies, commodities, and stocks.'
	},
	{ tag: tags.text, text: 'Choosing an Asset by Category' },
	{ tag: tags.img, id: 1, thumb: [460, 400], full: [1330, 1157] },
	{
		tag: tags.text,
		text: 'Or use the instant search to find the desired asset: simply start typing the asset name.'
	},
	{ tag: tags.img, id: 2, thumb: [460, 116], full: [1065, 268] },
	{
		tag: tags.text,
		text: 'You can add any currency pair/cryptocurrency/commodity and stocks to your favorites for quick access. Frequently used assets may be marked with stars and displayed on the quick access panel at the top of the screen.'
	},
	{ tag: tags.img, id: 3, thumb: [460, 282], full: [1017, 623] },
	{
		tag: tags.text,
		text: 'The percentage next to the asset determines its profitability. The higher the percentage, the higher your profit in the event of success.'
	},
	{
		tag: tags.highlight,
		text: '<span>Example:</span> If a $ 10 trade with an 80% return closes with a positive result, $ 18 will be credited to your balance. $ 10 is your investment, $ 8 is your profit.'
	},
	{ tag: tags.h3, text: 'Setting Purchase Time in Digital Trading' },
	{
		tag: tags.text,
		text: 'To select the purchase time in digital trading, click on the "Purchase Time" menu (as in the example) on the trading panel and choose your preferred option.'
	},
	{
		tag: tags.text,
		text: 'Please note that the expiration time for trades in Digital Trading is equal to the purchase time + 30 seconds. You can always see when your trade will close on the chart — it’s the vertical line "Time to Expiry" with a timer.'
	},
	{ tag: tags.img, id: 4, thumb: [460, 391], full: [855, 727] },
	{ tag: tags.h3, text: 'Setting Purchase Time for Quick Trading' },
	{
		tag: tags.text,
		text: 'To select the purchase time in digital trading, click on the "Expiration Time" menu (as in the example) on the trading panel and set the required time.'
	},
	{ tag: tags.img, id: 5, thumb: [460, 374], full: [827, 673] },
	{ tag: tags.h3, text: 'Changing the Trade Amount' },
	{
		tag: tags.text,
		text: 'You can change the trade amount by pressing "-" and "+" in the "Trade Amount" section of the trading panel.'
	},
	{
		tag: tags.text,
		text: 'You can also click on the current amount, allowing you to enter the required amount manually or multiply/divide it.'
	},
	{ tag: tags.img, id: 6, thumb: [460, 368], full: [845, 677] },
	{ tag: tags.h3, text: 'Execution Price Settings' },
	{
		tag: tags.text,
		text: 'The execution price allows you to place a trade at a price higher or lower than the current market price with a corresponding change in the payout percentage. You can enable this option on the trading panel before placing a trade.'
	},
	{
		tag: tags.text,
		text: 'Risk and potential payout rates depend on how large the difference is between the market price and the execution price. Thus, you not only predict the price movement but also specify the price level that must be reached.'
	},
	{
		tag: tags.text,
		text: 'To enable or disable the execution price, use the corresponding switch in the lower trading panel above the market price.'
	},
	{
		tag: tags.highlight,
		text: '<span>Attention:</span> When the execution price is enabled, your trading orders will be placed above or below the current market position due to the nature of this function. Please do not confuse it with regular trading orders that are always placed at market prices.'
	},
	{
		tag: tags.highlight,
		text: '<span>Attention:</span> Execution prices are only available for digital trading.'
	},
	{ tag: tags.h3, text: 'Analyzing Price Movement on the Chart and Making Your Prediction' },
	{
		tag: tags.text,
		text: 'Select "Up" (green) or "Down" (red) based on your forecast. If you expect the price to go up, click "Up"; if you think the price will go down, click "Down".'
	},
	{ tag: tags.img, id: 7, thumb: [760, 343], full: [1680, 759] },
	{ tag: tags.b, text: 'In Case of a Correct Prediction' },
	{
		tag: tags.text,
		text: 'You receive profit — the total payout, including the initially invested amount, as well as the trading profit, which depends on the set parameters of the asset at the time the order is placed.'
	},
	{ tag: tags.b, text: 'In Case of an Incorrect Prediction' },
	{
		tag: tags.text,
		text: 'The initially invested amount at the time of placing the order is deducted from the trading account balance.'
	},
	{ tag: tags.h3, text: 'Closing an Open Trade' },
	{
		tag: tags.text,
		text: 'To close a trade before its expiry, go to the "Trades" section in the right panel of the trading interface. There, you can see all the trades currently in progress, and you need to click the "Close" button next to the specific trade.'
	},
	{
		tag: tags.highlight,
		text: '<span>Attention:</span> Trades can only be canceled within the first few seconds after placing the trading order.'
	},
	{ tag: tags.h2, text: 'Placing An Express Trade' },
	{
		tag: tags.text,
		text: 'Express trading involves a composite forecast based on multiple events across various trading assets. A successful express trade yields a payout of over 100%! When activating express trading mode, each click on the green or red button adds your prediction to the express trade. Payouts for all predictions within the express trade are multiplied, allowing for much larger profits compared to using a single quick or digital trade.'
	},
	{
		tag: tags.text,
		text: 'To access express trading, find the "Express" button on the right sidebar of the trading interface.'
	},
	{ tag: tags.img, id: 8, thumb: [460, 539], full: [990, 1160] },
	{
		tag: tags.text,
		text: 'Select an asset type, click the button on the appropriate tab (1), and then make at least two forecasts on different assets (2) to link the express trade.'
	},
	{ tag: tags.h3, text: 'Viewing Open Express Orders' },
	{
		tag: tags.text,
		text: 'To see your active express orders, click the "Express" button on the right sidebar of the trading interface and select the "Open" tab.'
	},
	{ tag: tags.img, id: 9, thumb: [460, 337], full: [941, 689] },
	{ tag: tags.h3, text: 'Viewing Closed Express Orders' },
	{
		tag: tags.text,
		text: 'To view closed express orders, click the "Express" button on the right sidebar of the trading interface and select the "Closed" tab.'
	},
	{ tag: tags.h2, text: 'Monitoring Your Trades' },
	{
		tag: tags.text,
		text: 'Active trading sessions can be viewed without leaving the trading interface or navigating to another page. In the right menu, find the "Trades" button and click to display a pop-up menu with information about trades for the current session.'
	},
	{ tag: tags.h3, text: 'Displaying Open Trades' },
	{
		tag: tags.text,
		text: 'To see open trades, go to the "Trades" section in the right panel of the trading interface. All trades currently in progress will be displayed there.'
	},
	{ tag: tags.h3, text: 'Displaying Closed Trades' },
	{
		tag: tags.text,
		text: 'Closed trades for the trading session can be found in the "Trades" section (right panel of the trading interface).'
	},
	{
		tag: tags.text,
		text: 'To view real-time trade history, click "More" in this section, and you will be redirected to your trade history.'
	},
	{ tag: tags.h2, text: 'Pending Trades' },
	{
		tag: tags.text,
		text: 'A pending trade allows you to place trades at a specific time in the future or when the asset price reaches a certain level. In other words, your trade will be placed when the specified parameters are met. You can also cancel a pending trade before it is placed without any losses.'
	},
	{ tag: tags.h3, text: "Placing a trade order 'At Time'" },
	{
		tag: tags.text,
		text: 'To place a pending order that executes "At Time" (at a specified time), follow these steps:'
	},
	{
		tag: tags.ul,
		text: [
			'Select the asset.',
			'Tap on the clock icon and set the date and time for when you want to place the trade.',
			'Set the minimum payout percentage (Note that if the actual payout percentage is lower than what you set, the order won’t be opened).',
			'Choose the timeframe.',
			'Enter the trade amount.',
			'After setting all parameters, choose whether you want to place a put or call option.',
			"A pending trade will be created, and you can track it in the 'Current' tab."
		]
	},
	{ tag: tags.img, id: 10, thumb: [460, 552], full: [972, 1166] },
	{
		tag: tags.highlight,
		text: '<span>Attention:</span> Note that at the time of executing the pending trade order, you must have a sufficient balance; otherwise, it won’t be placed. If you wish to cancel an unfinished trade, press the "X" on the right.'
	},
	{ tag: tags.h3, text: 'Placing an Order "By Asset Price"' },
	{ tag: tags.text, text: 'To place a pending trade that executes "By Asset Price," you need to:' },
	{
		tag: tags.ul,
		text: [
			'Select the asset.',
			'Set the desired opening price and payout percentage. If the actual payout percentage is lower than what you’ve set, the pending bet won’t be placed.',
			'Choose the timeframe and trade amount.',
			'Select whether you want to place a put or call option.'
		]
	},
	{ tag: tags.img, id: 11, thumb: [460, 540], full: [973, 1142] },
	{
		tag: tags.text,
		text: 'A pending trade will be created, and you can monitor it in the "Current" tab.'
	},
	{
		tag: tags.highlight,
		text: '<span>Example:</span> At the time of executing a pending trading order, you must have a sufficient balance; otherwise, it won’t be placed. If you want to cancel an incomplete trade, click the "X" on the right.'
	},
	{
		tag: tags.highlight,
		text: '<span>Example:</span> A pending trade executed "By Asset Price" opens with the next tick after reaching the specified price level.	'
	},
	{ tag: tags.h3, text: 'Canceling a Pending Trading Order' },
	{
		tag: tags.text,
		text: 'If you wish to cancel a pending trade, click the "X" on the tab displaying current pending orders.'
	}
];
