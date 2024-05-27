<script>
	export let caption;
</script>

<div class="number-wrap">
	<div class="number"><slot /></div>
	<div class="caption">{caption}</div>
</div>

<style>
	.number-wrap {
		text-align: left;
		margin-bottom: 10px;
	}
	.number {
		color: var(--highlight-blue);
		font-weight: 700;
		font-size: 56px;
		line-height: 1;
		white-space: nowrap;
	}
	.caption {
		font-size: 400px;
		font-size: 16px;
		line-height: 1.2;
		text-transform: uppercase;
		color: var(--text-color);
	}

	@media screen and (max-width: 960px) {
		.number {
			margin-bottom: 6px;
		}
	}
	@media screen and (max-width: 768px) {
		.number {
			font-size: 50px;
		}
		.caption {
			font-size: 15px;
		}
	}

	@media screen and (max-width: 640px) {
		.number {
			font-size: 40px;
		}
		.caption {
			font-size: 13px;
		}
	}

	@media screen and (max-width: 480px) {
		.number-wrap {
			text-align: center;
			margin-bottom: 20px;
			max-width: 220px;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
