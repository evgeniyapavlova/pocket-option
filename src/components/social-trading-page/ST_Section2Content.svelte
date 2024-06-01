<script>
	import ImageWrap from '$common/ImageWrap.svelte';
	import content from './content';

	const listImages = [
		{ id: '6', thumb: [460, 191], full: [940, 390] },
		{ id: '7', thumb: [460, 320], full: [705, 491] },
		{ id: '8', thumb: [760, 223], full: [1680, 494] },
		{ id: '9', thumb: [460, 316], full: [940, 645] },
		{ id: '11', thumb: [460, 329], full: [934, 669] },
		{ id: '10', thumb: [460, 276], full: [1317, 790] }
	];
</script>

<div class="text">{content.text_1}</div>
<ImageWrap imageH={347} path="/social-trading/img1.webp" fullImage={[1919, 877]} />

<h2>{content.h2_1}</h2>
<div class="text">{content.text_2}</div>
<ImageWrap imageW={360} imageH={381} path="/social-trading/img2.webp" fullImage={[520, 550]} />

<h2>{content.h2_2}</h2>
<div class="text">{content.text_3}</div>
<ImageWrap imageW={360} imageH={378} path="/social-trading/img3.webp" fullImage={[520, 546]} />

<h2>{content.h2_3}</h2>
<div class="text">{content.text_4}</div>
<div class="text">{content.text_5}</div>
<ImageWrap imageH={534} path="/social-trading/img4.webp" fullImage={[815, 572]} />

<h2>{content.h2_4}</h2>
<div class="text">{content.text_6}</div>

<h2>{content.h2_5}</h2>
<div class="text">{content.text_7}</div>

<h2>{content.h2_6}</h2>
<div class="text">{content.text_8}</div>
<div class="text">{content.text_9}</div>
<div class="blue-border-block text">{@html content.hightlight_1}</div>

<h2>{content.h2_7}</h2>
<div class="text">{content.text_10}</div>
<ImageWrap imageW={360} imageH={356} path="/social-trading/img5.webp" fullImage={[410, 406]} />

<ul class="text">
	{#each content.list_1 as text}
		<li>{@html text}</li>
	{/each}
</ul>

<div class="text">{content.text_10_1}</div>

<ol class="text">
	{#each content.list_2 as { text, list }}
		<li>
			{@html text}
			<ul class="text">
				{#each list as text}
					<li>{text}</li>
				{/each}
			</ul>
		</li>
	{/each}
</ol>
<div class="text">{content.text_11}</div>
<div class="blue-border-block text">{@html content.hightlight_2}</div>

{#each content.list_3 as { h2, list_text }, index}
	<h2>{h2}</h2>
	{#each list_text as text}
		<div class="text">{text}</div>
	{/each}
	<ImageWrap
		imageW={listImages[index].thumb[0]}
		imageH={listImages[index].thumb[1]}
		path="/social-trading/img{listImages[index].id}.webp"
		fullImage={listImages[index].full}
	/>
	{#if index === 3}
		<ImageWrap
			imageW={listImages[5].thumb[0]}
			imageH={listImages[5].thumb[1]}
			path="/social-trading/img{listImages[5].id}.webp"
			fullImage={listImages[5].full}
		/>{/if}
{/each}
