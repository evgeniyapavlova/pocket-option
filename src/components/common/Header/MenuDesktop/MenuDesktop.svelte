<script>
	import { getLink } from '../../../../lib/utils/strings';
	import ExpandableMenu from './ExpandableMenu.svelte';
	import menuItems from '../menuItems';

	export let isExpanded;
</script>

<ul class={isExpanded ? 'menu-fullpage' : 'menu-top'}>
	{#each menuItems as item}
		<li>
			{#if item.children}
				<ExpandableMenu label={item.label} items={item.children} />
			{:else}
				<a href={getLink(item.label)}>{item.label}</a>{/if}
		</li>
	{/each}
</ul>

<style>
	.menu-fullpage {
		background-color: var(--bgr);
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 900;
	}
	ul {
		display: none;
		justify-content: flex-end;
	}

	ul > li {
		font-size: 14px;
		font-weight: 600;
	}

	a {
		padding: 20px 25px;
		display: block;
		transition: color 0.2s ease-out;
	}

	a:hover {
		color: var(--highlight-blue);
	}

	@media (min-width: 901px) {
		ul {
			display: flex;
		}
	}
</style>
