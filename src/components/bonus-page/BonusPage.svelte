<script>
	import ContentWrap from '$common/ContentWrap.svelte';
	import IntroH1 from '$common/IntroH1.svelte';
	import BSection3PromoCode from './B_Section3PromoCode.svelte';
	import BSection4PromoCodeImages from './B_Section4PromoCodeImages.svelte';
	import content_1 from './content_1';
	import content_2 from './content_2';
	import DisplayAnyContent from '$common/DisplayAnyContent/DisplayAnyContent.svelte';
</script>

<IntroH1 bgrImg="/images/desktop-app-page/intro-bgr.jpg">
	Pocket Option Promo Code:<br /> How To Get And&nbsp;Use&nbsp;It?
</IntroH1>

<ContentWrap>
	<DisplayAnyContent content={content_1} imgFolder="bonus" />
	<BSection3PromoCode />
	<BSection4PromoCodeImages />
	<DisplayAnyContent content={content_2} imgFolder="bonus" />
</ContentWrap>
