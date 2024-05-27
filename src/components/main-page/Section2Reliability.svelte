<script>
	import HighlightNumber from '../common/Header/HighlightNumber.svelte';
</script>

<section>
	<div class="content">
		<div class="layout">
			<div class="text-content">
				<h2>Reliability and Trustworthiness</h2>
				<p class="text">
					With PocketOption, you are investing with a well-established brand. PocketOption is fully
					licensed and regulated by top-tier financial authorities, ensuring a high level of trust
					and reliability. In operation for over 10 years, we are among the largest companies in the
					trading industry, having gained recognition and adherence to the strictest regulatory
					standards.
				</p>
			</div>
			<div class="numbers">
				<HighlightNumber caption="years of work experience">10+</HighlightNumber>
				<HighlightNumber caption="virtual money on your demo account">10 000$</HighlightNumber>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		padding-bottom: 115px;
	}
	.layout {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	.numbers {
		width: 31%;
	}
	.text-content {
		width: 57%;
	}

	@media screen and (max-width: 960px) {
		.layout {
			display: block;
		}
		.numbers,
		.text-content {
			width: 100%;
		}
		.text-content {
			margin-bottom: 22px;
		}
		.numbers {
			display: flex;
			gap: 24px;
		}
		:global(.numbers > .number-wrap) {
			width: 50%;
		}
		section {
			padding-bottom: 80px;
		}
	}

	@media screen and (max-width: 480px) {
		:global(.numbers > .number-wrap) {
			width: 100%;
		}
		h2,
		.text {
			text-align: center;
		}
		.numbers {
			display: block;
		}
	}
</style>
