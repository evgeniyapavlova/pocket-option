<script>
	import { fade } from 'svelte/transition';
	import { getLink } from '$lib/utils/strings';
	import ButtonWithArrow from '../ButtonWithArrow.svelte';

	export let items, label;

	let isExpandedItem = false;
</script>

<div
	role="button"
	tabindex="0"
	class="submenu-wrap {isExpandedItem ? 'submenu-wrap-open' : 'submenu-wrap-close'}"
	on:mouseenter={() => {
		if (!isExpandedItem) {
			isExpandedItem = true;
		}
	}}
	on:mouseleave={() => {
		if (isExpandedItem) {
			isExpandedItem = false;
		}
	}}
>
	<ButtonWithArrow isExpanded={isExpandedItem}>
		{label}
	</ButtonWithArrow>

	{#if isExpandedItem}
		<ul transition:fade={{ delay: 100, duration: 200 }}>
			<div class="arrow-up"></div>
			{#each items as item}
				<li>
					<a
						on:click={() => {
							isExpandedItem = false;
						}}
						href={getLink(item)}>{item}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.arrow-up {
		position: absolute;
		top: -6px;
		right: 50%;
		transform: translateX(50%);
		width: 0;
		height: 0;
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-bottom: 6px solid white;
	}
	.submenu-wrap {
		position: relative;
	}
	ul {
		background: white;
		cursor: pointer;
		position: absolute;
		color: #222;
		text-align: center;
		padding: 10px 0;
		border-radius: 4px;
		top: 50px;
		left: 50%;
		transform: translateX(-50%);
	}

	li {
		padding: 8px 20px;
		white-space: nowrap;
	}

	li:hover {
		color: var(--highlight-blue);
	}
</style>
