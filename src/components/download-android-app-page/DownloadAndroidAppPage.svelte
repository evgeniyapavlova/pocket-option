<script>
	import IntroH1 from '../common/IntroH1.svelte';
	import ContentWrap from '../common/ContentWrap.svelte';
	import DisplayAnyContent from '$common/DisplayAnyContent/DisplayAnyContent.svelte';
	import content from './content';
</script>

<IntroH1 bgrImg="/images/desktop-app-page/intro-bgr.jpg">
	Download Android App<br />For Best Mobile Experience
</IntroH1>
<ContentWrap>
	<DisplayAnyContent {content} imgFolder="download-android" />
</ContentWrap>
