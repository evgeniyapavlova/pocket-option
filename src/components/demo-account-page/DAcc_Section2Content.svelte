<script>
	import content from './content';
	import Button from '../common/Button.svelte';
	import ImageWrap from '../common/ImageWrap.svelte';
</script>

<div class="desc">{content.desc_1}</div>
<h2>{content.h2_1}</h2>
<div class="desc">{content.desc_2}</div>
<h2>{@html content.h2_2}</h2>

{#each content.list_1 as { h3, desc }}
	<h3>{h3}</h3>
	<div class="desc">{desc}</div>
{/each}

<h2>{@html content.h2_3}</h2>
<h3>{content.h3_1}</h3>

<div class="text"><b>{content.text_1}</b></div>

<div class="text">{content.text_2}</div>

<ol class="text">
	{#each content.list_2 as li}
		<li>{li}</li>
	{/each}
</ol>

<div class="text">{content.text_3}</div>

<div class="btn-wrap"><Button>Register</Button></div>

{#each content.list_3 as { h3, desc, listInner }}
	<h3>{h3}</h3>
	<div class="desc">{desc}</div>
	<ul class="desc">
		{#each listInner as { bold, text }}
			<b>{bold}</b><br />
			<li>{text}</li>
		{/each}
	</ul>
{/each}

<h2>{content.h2_4}</h2>
{#each content.list_4 as { bold, text }}
	<div class="desc">
		<b>{bold}</b><br />{text}
	</div>
{/each}

<h2>{content.h2_5}</h2>
<div class="desc">{content.desc_3}</div>
