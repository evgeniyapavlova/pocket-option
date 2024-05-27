<script>
	export let onClick, isExpanded;
</script>

<button on:click={onClick} class={isExpanded ? 'is-expanded-item' : 'is-collapsed-item'}>
	<slot />
</button>

<style>
	button::after {
		content: '';
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 4px 3px 0 3px;
		border-color: transparent transparent transparent transparent;
		border-top-color: inherit;
		transition: transform 0.3s;
		margin-top: 2px;
		position: absolute;
		top: 46%;
		right: 12px;
	}

	button {
		padding: 20px 25px;
		cursor: pointer;
		transition: color 0.2s ease-out;
		position: relative;
	}

	button.is-expanded-item::after {
		transform: rotate(-180deg);
	}

	button.is-expanded-item {
		color: var(--highlight-blue);
	}
</style>
