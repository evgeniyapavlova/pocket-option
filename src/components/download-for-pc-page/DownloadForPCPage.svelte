<script>
	import DfpcSection1Intro from './DFPC_Section1Intro.svelte';
	import ContentWrap from '../common/ContentWrap.svelte';
	import DisplayAnyContent from '$common/DisplayAnyContent/DisplayAnyContent.svelte';
	import content from './content_1.js';
</script>

<DfpcSection1Intro />
<ContentWrap>
	<DisplayAnyContent {content} imgFolder="download-for-pc" />
</ContentWrap>
