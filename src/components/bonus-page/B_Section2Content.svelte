<script>
	import content from './content';
</script>

<h2>{content.h2_1}</h2>
<div class="desc">{content.desc_1}</div>

<h2>{content.h2_2}</h2>
<div class="desc">{content.desc_2}</div>
<div class="desc">{content.desc_3}</div>
<ol class="desc">
	{#each content.list_1 as item}
		<li>{@html item}</li>
	{/each}
</ol>
<div class="desc">{content.desc_4}</div>
<div class="desc">{content.desc_5}</div>
