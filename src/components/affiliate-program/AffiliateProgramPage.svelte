<script>
	import IntroH1 from '$common/IntroH1.svelte';
	import ContentWrap from '$common/ContentWrap.svelte';
	import content from './content';
	import DisplayAnyContent from '$common/DisplayAnyContent/DisplayAnyContent.svelte';
</script>

<IntroH1 btnText="Join Now">Pocket Option Affiliate&nbsp;Program</IntroH1>
<ContentWrap>
	<DisplayAnyContent {content} imgFolder="affiliate-program" />
</ContentWrap>
