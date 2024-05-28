<script>
	import FuncItem1 from './svg/FuncItem1.svelte';
	import FuncItem2 from './svg/FuncItem2.svelte';
	import FuncItem3 from './svg/FuncItem3.svelte';
	import FuncItem4 from './svg/FuncItem4.svelte';
	import FuncItem5 from './svg/FuncItem5.svelte';
	import FuncItem6 from './svg/FuncItem6.svelte';

	const itemsSvgs = [FuncItem1, FuncItem2, FuncItem3, FuncItem4, FuncItem5, FuncItem6];

	const items = [
		'Short Spread',
		'No Overnight<br />Deposits',
		'Wide Choice of Trading Tools and Analysis Instruments',
		'High Liquidity',
		'Automated Order<br />Execution',
		'No Fines<br />for Inactivity'
	];
</script>

<div class="content">
	<h2>Platform Functionality<br class="show-less-960" /> and Trading Offer</h2>
	<div class="text">
		PocketOption offers a robust trading platform with an array of features designed to meet the
		demands of modern traders:
	</div>
	<div class="func-items">
		{#each items as item, index}
			<div class="func-item">
				<div class="svg-wrap">
					<svelte:component this={itemsSvgs[index]} />
				</div>
				<div class="text">
					{@html item}
				</div>
			</div>
		{/each}
	</div>
	<div class="text">
		Access our cutting-edge trading area via web interface or through your iOS or Android
		smartphone, and experience seamless trading like never before.
	</div>
</div>

<style>
	.svg-wrap {
		width: 70px;
		height: 70px;
		margin: 0 auto 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.func-items {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		margin-bottom: 34px;
		margin-top: 65px;
	}
	.func-item {
		width: 16%;
	}
	.content {
		text-align: center;
	}
	.text {
		max-width: 700px;
		margin: 0 auto;
	}
	@media screen and (max-width: 960px) {
		.func-item {
			width: 32%;
			margin-bottom: 40px;
		}
		.func-items {
			flex-wrap: wrap;
			margin-bottom: 0;
		}
	}
	@media screen and (max-width: 480px) {
		.func-item {
			width: 50%;
		}
	}
</style>
