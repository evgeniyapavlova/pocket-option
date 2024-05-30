<script>
	import Button from '../common/Button.svelte';
	import ImageWrap from '../common/ImageWrap.svelte';
</script>

<h2>Registration Process</h2>
<div class="text">
	Trading on PocketOption is very simple, just click the "START IN ONE CLICK" button. You will be
	taken to the demo trading page.
</div>
<div class="image-wrap-1">
	<ImageWrap imageH={355} path="/registration-page/process_img1.jpg" />
</div>

<div class="text">Click "Demo Account" to start trading with $ 50,000 on a demo account.</div>
<ImageWrap path="/registration-page/process_img2.jpg" imageH={354} />

<div class="image-wrap-3">
	<ImageWrap path="/registration-page/process_img3.jpg" imageH={354} />
</div>
<div class="text">
	To continue using the account, save your trading results, and start trading on a real account,
	click "Registration" to create a PocketOption account.
</div>

<ImageWrap path="/registration-page/process_img4.jpg" imageH={355} />

<div class="text text-bottom">
	You’ll have two options: Register using your email address or your Google account, as shown below.
</div>

<div class="btn-wrap">
	<Button>Register</Button>
</div>
