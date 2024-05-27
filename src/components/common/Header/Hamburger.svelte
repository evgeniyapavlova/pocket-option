<script>
	export let isExpanded;
</script>

<button
	class={isExpanded ? 'ham-menu-expanded' : 'ham-menu-collapsed'}
	aria-label="Menu"
	aria-expanded="false"
	on:click={() => (isExpanded = !isExpanded)}
>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
</button>

<style>
	@media (min-width: 901px) {
		button {
			display: none;
		}
	}

	span:nth-child(1) {
		top: 0px;
	}
	span:nth-child(2),
	span:nth-child(3) {
		top: 8px;
	}
	span:nth-child(4) {
		top: 16px;
	}
	.ham-menu-expanded span:nth-child(2) {
		transform: rotate(45deg);
	}
	.ham-menu-expanded span:nth-child(1),
	.ham-menu-expanded span:nth-child(4) {
		top: 8px;
		width: 0%;
		left: 50%;
	}
	.ham-menu-expanded span:nth-child(3) {
		transform: rotate(-45deg);
	}
	button {
		position: relative;
		width: 28px;
		height: 20px;
		padding: 0;
		background-color: transparent;
		outline: none;
		transition: transform 0.5s ease-in-out;
		cursor: pointer;
		z-index: 999;
	}
	span {
		/* z-index: 999; */
		display: block;
		position: absolute;
		width: 100%;
		opacity: 1;
		left: 0;
		transition: 0.25s ease-in-out;
		height: 3px;
		background-color: #fff;
	}
</style>
