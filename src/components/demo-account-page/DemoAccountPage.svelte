<script>
	import IntroH1 from '$common/IntroH1.svelte';
	import ContentWrap from '$common/ContentWrap.svelte';
	import DisplayAnyContent from '$common/DisplayAnyContent/DisplayAnyContent.svelte';
	import content from './content';
</script>

<IntroH1 bgrImg="/images/desktop-app-page/intro-bgr.jpg">
	Discover The Excitement Of Trading<br />With Pocket&nbsp;Option Demo&nbsp;Account
</IntroH1>

<ContentWrap>
	<DisplayAnyContent imgFolder="demo-account" {content} />
</ContentWrap>
