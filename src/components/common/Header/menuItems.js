const appChildren = ['Desktop App', 'Download for PC', 'Download Android App', 'MT4 Platform'];
const depositChildren = ['Minimum Deposit', 'Deposit Methods', 'Bonus'];
const tradingChildren = ['Tournaments', 'Social Trading', 'How to use'];

const menuItems = [
	{ label: 'Registration' },
	{
		label: 'App',
		children: appChildren
	},
	{ label: 'Account', children: ['Demo Account'] },
	{ label: 'Deposit', children: depositChildren },
	{ label: 'Trading', children: tradingChildren }
];

export const footerMenuItems = [
	{
		label: 'Get App',
		children: appChildren
	},
	{ label: 'Account', children: ['Registration', 'Demo Account'] },
	{ label: 'Deposit', children: depositChildren },
	{
		label: 'Trading',
		children: ['Affiliates Program', ...tradingChildren]
	}
];

export default menuItems;
