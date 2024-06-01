<script>
	import ImageWrap from '$common/ImageWrap.svelte';
	import content from './content';
</script>

<h2>{content.h2_1}</h2>
<div class="text">{content.text_1}</div>
<ImageWrap imageH={349} path="/tournaments/img1.webp" fullImage={[1680, 771]} />
<ImageWrap imageH={405} imageW={260} path="/tournaments/img2.webp" fullImage={[515, 801]} />

<h2>{content.h2_2}</h2>
<div class="text">{content.text_2}</div>
<ImageWrap imageH={347} path="/tournaments/img3.webp" fullImage={[1680, 765]} />
<ImageWrap imageH={348} path="/tournaments/img4.webp" fullImage={[1917, 877]} />
<h2>{content.h2_3}</h2>
<div class="text">{content.text_3}</div>
<ImageWrap imageH={108} imageW={360} path="/tournaments/img5.webp" fullImage={[795, 224]} />
<ImageWrap imageH={283} imageW={360} path="/tournaments/img6.webp" fullImage={[938, 698]} />

<div class="text">{content.text_4}</div>
<ImageWrap imageH={434} imageW={360} path="/tournaments/img7.webp" fullImage={[414, 498]} />

<h2>{content.h2_4}</h2>
<div class="text">{content.text_5}</div>
<ImageWrap imageW={460} imageH={462} path="/tournaments/img8.webp" fullImage={[539, 541]} />
<div class="text">{content.text_6}</div>

<h2>{content.h2_5}</h2>
<div class="text">{content.text_7}</div>
<ImageWrap imageW={460} imageH={451} path="/tournaments/img9.webp" fullImage={[828, 811]} />

<div class="text">{content.text_8}</div>
<div class="blue-border-block text">{@html content.hightlight_1}</div>

<h2>{content.h2_6}</h2>
<div class="text">{content.text_9}</div>
<div class="text">{content.text_10}</div>
<ImageWrap imageW={460} imageH={294} path="/tournaments/img10.webp" fullImage={[1006, 642]} />

<style>
	.blue-border-block {
		padding: 40px;
	}
	@media screen and (max-width: 640px) {
		.blue-border-block {
			padding: 20px;
		}
	}
</style>
