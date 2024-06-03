<script>
	import IntroH1 from '../common/IntroH1.svelte';
	import ContentWrap from '../common/ContentWrap.svelte';
	import DisplayAnyContent from '$common/DisplayAnyContent/DisplayAnyContent.svelte';
	import content from './content';
</script>

<IntroH1 btnText="Try now" bgrImg="/images/desktop-app-page/intro-bgr.jpg">MT4 Platform</IntroH1>

<ContentWrap>
	<DisplayAnyContent imgFolder="mt4-platform" {content} />
</ContentWrap>
