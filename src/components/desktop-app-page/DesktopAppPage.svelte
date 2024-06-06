<script>
	import IntroH1 from '../common/IntroH1.svelte';
	import ContentWrap from '../common/ContentWrap.svelte';
	import DisplayAnyContent from '$common/DisplayAnyContent/DisplayAnyContent.svelte';
	import content from './content.js';
	import REG_Section4GoogleAccount from '../registration-page/REG_Section4GoogleAccount.svelte';
</script>

<IntroH1>
	Pocket Option <br />Desktop App
</IntroH1>
<ContentWrap>
	<DisplayAnyContent {content} imgFolder="desktop-app-page" />
	<REG_Section4GoogleAccount />
</ContentWrap>
