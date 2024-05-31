<script>
	import { slide } from 'svelte/transition';

	import { getLink } from '$lib/utils/strings';
	import menuItems from '../menuItems';
	import ButtonWithArrow from '../ButtonWithArrow.svelte';

	export let isExpanded;

	const temp = menuItems;

	function closeMenu() {
		isExpanded = false;
		temp.forEach((el) => (el.open = false));
	}
</script>

{#if isExpanded}
	<ul class="menu-fullpage" transition:slide={{ delay: 250, duration: 300, axis: 'x' }}>
		{#each temp as item, index}
			<li class="menu-item">
				{#if item.children}
					<ButtonWithArrow
						isExpanded={item?.open}
						onClick={() => {
							if (item?.open) {
								temp[index].open = false;
							} else {
								temp.forEach((el) => (el.open = false));
								temp[index].open = true;
							}
						}}>{item.label}</ButtonWithArrow
					>
					{#if item?.open}
						<ul class="submenu-fullpage" transition:slide={{ delay: 250, duration: 300 }}>
							{#each item.children as item}
								<li>
									<a on:click={closeMenu} href={getLink(item)}>{item}</a>
								</li>
							{/each}
						</ul>
					{/if}
				{:else}
					<a on:click={closeMenu} class="menu-item-link" href={getLink(item.label)}>
						{item.label}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style>
	.menu-item {
		position: relative;
		text-align: center;
		font-size: 30px;
	}
	.submenu-fullpage {
		font-size: 14px;
	}
	.menu-item-link {
		padding: 20px 25px;
		display: block;
	}
	.submenu-fullpage a {
		padding: 8px 25px;
		display: block;
	}
	.submenu-fullpage {
		text-align: center;
		font-weight: 600;
	}
	.menu-fullpage {
		padding: 70px 0;
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
		font-weight: 400;
	}
	@media (min-width: 901px) {
		.menu-fullpage {
			display: none;
		}
	}
</style>
