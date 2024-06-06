<script>
	import { base } from '$app/paths';
	import { getLink } from '$lib/utils/strings';
	import Logo from '../svg/Logo.svelte';
	import { footerMenuItems } from './Header/menuItems';
</script>

<footer>
	<div class="content">
		<div class="footer-top">
			<a href={base}><Logo /></a>

			<div class="footer-menu">
				{#each footerMenuItems as item}
					<ul>
						<div class="menu-title">
							{item.label}
						</div>
						{#each item.children as subitem}
							<li>
								<a href={getLink(subitem)}>{subitem}</a>
							</li>
						{/each}
					</ul>
				{/each}
			</div>
		</div>
	</div>
	<div class="content">
		<div class="footer-bottom">
			<div class="footer-bottom-left">
				<span>Privacy Cookie Policy</span>
				<span>Terms Of Use</span>
			</div>
			<div class="footer-bottom-right">
				<span>Contact Us</span>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer-bottom-left {
		display: flex;
		justify-content: flex-start;
		gap: 50px;
	}
	.footer-bottom {
		display: flex;
		justify-content: space-between;
		border-top: 1px solid rgba(16, 104, 212, 0.5);
		padding-top: 20px;
		padding-bottom: 70px;
		color: rgba(16, 104, 212, 0.8);
	}
	.footer-top {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding: 80px 0 40px;
	}
	.menu-title {
		color: var(--highlight-blue);
		font-size: 16px;
		font-weight: 600;
		margin-bottom: 12px;
		line-height: 1.5;
		text-transform: uppercase;
	}
	.footer-menu {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		width: 780px;
	}

	.footer-menu a {
		transition: color ease-out 0.2s;
	}

	.footer-menu a:hover {
		color: var(--highlight-blue);
	}

	ul {
		display: block;
		width: 25%;
	}
	li {
		margin-bottom: 11px;
		font-size: 14px;
	}

	footer {
		background-color: #020a14;
	}

	@media screen and (max-width: 1200px) {
		.footer-menu {
			flex-wrap: wrap;
			width: 450px;
			max-width: 100%;
		}

		ul {
			width: 50%;
			margin-bottom: 20px;
		}
	}

	@media screen and (max-width: 960px) {
		.footer-top {
			display: block;
		}
		.footer-menu {
			margin-top: 40px;
		}
	}

	@media screen and (max-width: 640px) {
		.footer-bottom {
			display: block;
		}
		.footer-bottom-left {
			margin-bottom: 10px;
			gap: 30px;
		}
	}

	@media screen and (max-width: 480px) {
		li {
			font-size: 12px;
		}
	}
</style>
