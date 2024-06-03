<script>
	import ContentWrap from '$common/ContentWrap.svelte';
	import IntroH1 from '$common/IntroH1.svelte';
	import DisplayAnyContent from '$common/DisplayAnyContent/DisplayAnyContent.svelte';
	import content from './content';
</script>

<IntroH1 btnText="Register" bgrImg="/images/desktop-app-page/intro-bgr.jpg">
	Deposit Methods
</IntroH1>

<ContentWrap>
	<DisplayAnyContent imgFolder="deposit-methods" {content} />
</ContentWrap>
