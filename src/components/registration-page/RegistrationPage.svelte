<script>
	import Intro from './REG_Section1Intro.svelte';
	import RegSection4GoogleAccount from './REG_Section4GoogleAccount.svelte';
	import RegSection5PocketOptionApp from './REG_Section5PocketOptionApp.svelte';
	import RegSection7Faq from './REG_Section7FAQ.svelte';
	import ContentWrap from '../common/ContentWrap.svelte';
	import DisplayAnyContent from '$common/DisplayAnyContent/DisplayAnyContent.svelte';
	import { section2, section3, section6 } from './content';
</script>

<Intro />
<ContentWrap>
	<DisplayAnyContent imgFolder="registration-page" content={section2} />
	<DisplayAnyContent imgFolder="registration-page" content={section3} />
	<RegSection4GoogleAccount />
	<RegSection5PocketOptionApp />
	<DisplayAnyContent imgFolder="registration-page" content={section6} />
	<RegSection7Faq />
</ContentWrap>
