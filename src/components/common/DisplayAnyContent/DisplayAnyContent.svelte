<script>
	import ImageWrap from '$common/ImageWrap.svelte';
	export let content, imgFolder;
</script>

{#each content as data}
	{#if data.tag === 'text'}
		<div class="text">{@html data.text}</div>
	{:else if data.tag === 'h2'}
		<h2>{@html data.text}</h2>
	{:else if data.tag === 'h3'}
		<h3>{@html data.text}</h3>
	{:else if data.tag === 'highlight'}
		<div class="blue-border-block text">{@html data.text}</div>
	{:else if data.tag === 'b'}
		<div class="text"><b>{data.text}</b></div>
	{:else if data.tag === 'ul'}
		<ul class="text">
			{#each data.text as textItem}
				<li>{@html textItem}</li>
			{/each}
		</ul>
	{:else if data.tag === 'ol_ul'}
		<ol class="text">
			{#each data.text as textItem}
				<li>
					{@html textItem.li}
					{#if textItem.list?.length}
						<ul class="text">
							{#each textItem.list as li}
								<li>{@html li}</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ol>
	{:else if data.tag === 'img'}
		<ImageWrap
			imageW={data.thumb[0]}
			imageH={data.thumb[1]}
			path="/{imgFolder}/img{data.id}.webp"
			fullImage={data.full}
		/>{/if}
{/each}
