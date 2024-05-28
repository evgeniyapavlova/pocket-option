<script>
	import Button from '../common/Button.svelte';
	import ImageWrap from './ImageWrap.svelte';
</script>

<section>
	<div class="content">
		<h2>Register on Pocket&nbsp;Option via&nbsp;Google&nbsp;Account</h2>
		<div class="text" style="margin-bottom: 20px;">
			You can register a PocketOption account using Google. If you wish to do so, follow these
			steps.
		</div>
		<ol class="image-wrap-1">
			<li class="text">Click the "Google" button.</li>
			<div class="image-5">
				<ImageWrap imageIdx="5" imageH={452} />
			</div>
			<li class="text">
				In the opened window, select your Google account or enter your phone number or email address
				and click "Next."
			</li>
			<li class="text">Then enter the password for your Google account and click "Next."</li>
			<li class="text">After that, you’ll be directed to your PocketOption dashboard.</li>
		</ol>
		<div class="text">
			If you want to use a demo account, click "Trading" and "Quick Trading on a Demo Account."
		</div>
		<ImageWrap imageIdx="6" imageH={351} />

		<div class="image-wrap-1">
			<ImageWrap imageIdx="7" imageH={351} />
		</div>
		<div class="text">Now you can start trading. You have $ 1,000 on your demo account.</div>
		<div class="text">
			Using a demo account is an excellent way to learn how to trade and get the hang of things
			without worrying about losing your own funds.
		</div>
		<ImageWrap imageIdx="8" imageH={352} />
		<div class="text text-bottom">
			To start real-time trading, you need to make an investment in your account (the minimum
			investment amount is $ 50).
		</div>
		<div class="btn-wrap">
			<Button>Create account</Button>
		</div>
	</div>
</section>

<style>
	section {
		position: relative;
		padding-top: 100px;
	}
	.content {
		position: static;
	}
	.image-wrap-1 {
		margin-bottom: 50px;
	}
	.btn-wrap {
		text-align: center;
		max-width: 760px;
	}

	.text {
		max-width: 760px;
		margin-top: 20px;
	}

	li {
		margin-bottom: 20px;
		margin-top: 20px;
		margin-left: 16px;
	}

	.text-bottom {
		margin-top: 50px;
		margin-bottom: 30px;
	}

	@media screen and (max-width: 480px) {
		:global(.image-5 .image-wrap) {
			height: calc((100vw - 48px) * 0.6 + 25px);
		}
	}

	@media screen and (min-width: 1201px) {
		.content {
			max-width: 844px;
		}
	}
</style>
