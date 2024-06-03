<script>
	import { reg_link } from '$lib/stores/reg_link';
</script>

<a class="button" href={$reg_link} target="_blank"><slot /></a>

<style>
	.button {
		background-color: var(--highlight-blue);
		color: white;
		padding: 14px 40px;
		border-radius: 30px;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 16px;
		display: inline-block;
		transition:
			color 0.2s ease-out,
			background-color 0.3s ease-out;
		cursor: pointer;
	}
	.button:hover {
		color: var(--highlight-blue);
		background-color: white;
	}

	@media screen and (max-width: 480px) {
		.button {
			padding: 14px 24px;
		}
	}
</style>
