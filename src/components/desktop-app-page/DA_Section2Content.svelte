<script>
	import Button from '../common/Button.svelte';
	import ImageWrap from '../common/ImageWrap.svelte';
	import REG_Section4GoogleAccount from '../registration-page/REG_Section4GoogleAccount.svelte';
</script>

<h2>One-Click Registration on PocketOption</h2>
<div class="text">
	After you have downloaded and installed the PocketOption desktop application on your PC, you will
	land on the demo trading page. Click "CONTINUE DEMO TRADING" to start trading with $&nbsp;50,000
	in a demo&nbsp;account.
</div>
<div class="image-wrap-1">
	<ImageWrap imageH={355} path="/registration-page/process_img3.jpg" />
</div>
<div class="text" style="margin-top: 20px;">
	To continue using the account, save your trading results, and start trading on a real account,
	click "Registration" to create a PocketOption account.
</div>
<div class="image-wrap-1">
	<ImageWrap path="/registration-page/process_img4.jpg" imageH={355} />
</div>
<div class="text text-bottom">
	You’ll have two options: Register using your email address or your Google account, as shown below.
</div>
<div class="btn-wrap"><Button>Register</Button></div>

<REG_Section4GoogleAccount />
