<script>
	import content from './content';
</script>

<div class="text">
	To fund your deposit, there are multiple payment methods available, and the minimum deposit and
	processing time may vary depending on the chosen payment method.<br />All possible payment methods
	are listed in the table below:
</div>

<div class="container">
	<div class="table-wrap">
		<table>
			<tr>
				<th>Payment Method</th>
				<th>Currency</th>
				<th>Minimum Deposit</th>
				<th>Processing Time</th>
			</tr>

			{#each content as { method, dep, time }}
				<tr>
					<td>{method}</td>
					<td>USD</td>
					<td>{dep}</td>
					<td>{time}</td>
				</tr>
			{/each}
		</table>
	</div>
</div>

<style>
	.container {
		margin-top: 30px;
		overflow: hidden;
		position: relative;
		border-radius: 15px;
		background-color: #0c1525;
	}
	table {
		width: 100%;
		text-align: left;
		border-collapse: collapse;
	}
	.table-wrap {
		border-radius: 15px;
	}
	.table-wrap {
		border: 1px solid #0d2e59;
	}
	th,
	td {
		border: 1px solid #0d2e59;
		border-collapse: collapse;
	}
	th,
	td {
		padding: 22px 14px;
	}
	td {
		font-size: 16px;
	}
	th {
		border-top: none;
		font-size: 18px;
	}
	tr:last-child td {
		border-bottom: none;
	}
	td:first-child,
	th:first-child {
		border-left: none;
	}
	td:last-child,
	th:last-child {
		border-right: none;
	}
	@media screen and (max-width: 640px) {
		th {
			font-size: 14px;
		}
		td {
			font-size: 13px;
		}

		th,
		td {
			padding: 14px 10px;
		}
	}

	@media screen and (max-width: 480px) {
		.table-wrap {
			overflow: scroll;
		}
		.container::after {
			content: '';
			position: absolute;
			right: 0;
			top: 0;
			height: 100%;
			width: 35px;
			background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1));
		}
	}
</style>
