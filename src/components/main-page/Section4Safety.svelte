<script>
	const items = [
		'Deposit<br />Insurance',
		'Guaranteed In-Time<br />Execution for Your<br />Trading Orders',
		"Advanced Security<br /> Measures for Protecting<br /> Client's Data"
	];
</script>

<div class="content">
	<h2>Safety and Security</h2>
	<div class="text">
		We at PocketOption prioritize your safety and security. <br />Our well-developed authorization
		system guarantees the utmost protection for your account. We ensure:
	</div>

	<div class="safety-items">
		{#each items as item, index}
			<div class="safety-item blue-border-block">
				<div
					class="safety-img"
					style="background-image: url('/images/main-page/safety-item-{index + 1}.png')"
				></div>
				<div class="text">{@html item}</div>
			</div>
		{/each}
	</div>

	<div class="text">
		Your deposits and personal information are safeguarded with <span class="ws-nowrap"
			>state-of-the-art</span
		> technology.
	</div>
</div>

<style>
	.safety-img {
		position: absolute;
		width: 132px;
		height: 132px;
		background-size: cover;
		top: -70px;
		left: 50%;
		transform: translateX(-50%);
	}
	.safety-items {
		display: flex;
		align-items: flex-start;
		justify-content: space-around;
		margin-top: 124px;
		margin-bottom: 50px;
	}
	.safety-item {
		padding: 70px 30px 0;
		width: 270px;
		height: 177px;
		position: relative;
	}
	.content {
		text-align: center;
		padding-bottom: 140px;
	}
	.text {
		max-width: 600px;
		margin: 0 auto;
	}

	@media screen and (max-width: 1100px) {
		.safety-items {
			justify-content: space-between;
		}
	}

	@media screen and (max-width: 960px) {
		.safety-items {
			display: block;
			margin-bottom: -50px;
		}
		.safety-item {
			margin: 0 auto 92px;
			width: 250px;
		}
		.content {
			padding-bottom: 100px;
		}
	}
</style>
