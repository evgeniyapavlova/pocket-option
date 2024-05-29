<script>
	import { base } from '$app/paths';

	import content from './content';
	import Button from '../common/Button.svelte';
	import ImageWrap from '../common/ImageWrap.svelte';
</script>

<section>
	<div class="content">
		<h2>{content.h2_1}</h2>

		{#each content.text_block_1 as text}
			<div class="text">{@html text}</div>
		{/each}

		<div class="btn-wrap btn-wrap-1"><Button>Download the Application</Button></div>

		<div class="text">{content.text_1}</div>

		<ol class="text">
			{#each content.list_1 as text, idx}
				<li>{text}</li>
				{#if idx === 0}
					<ImageWrap path="/download-for-pc/dfpc_img1.jpg" imageH={211} />
				{/if}
			{/each}
		</ol>

		{#each content.text_block_2 as text}
			<div class="text">
				{@html text.replace('{LINK}', `${base}/desktop-app`)}
			</div>
		{/each}

		<h2 class="h2-in-text">{content.h2_2}</h2>

		<div class="text">{content.text_2}</div>

		<div class="btn-wrap btn-wrap-2"><Button>Download the Application</Button></div>

		{#each content.h3_and_text_1 as { h3, text }}
			<h3>{h3}</h3>
			<div class="text">{text}</div>
		{/each}

		<div class="btn-wrap btn-wrap-3"><Button>Download the Application</Button></div>

		<h2 class="h2-in-text">{@html content.h2_3}</h2>

		{#each content.h3_and_text_2 as { h3, text }}
			<h3>{h3}</h3>
			<div class="text">{text}</div>
		{/each}

		<ol class="text">
			{#each content.list_2 as text}<li>{text}</li>{/each}
		</ol>

		{#each content.h3_and_text_3 as { h3, text }}
			<h3>{h3}</h3>
			<div class="text">{text}</div>
		{/each}

		<div class="btn-wrap btn-wrap-3"><Button>Download the Application</Button></div>

		{#each content.h3_and_text_4 as { h3, text }}
			<h3>{h3}</h3>
			{#each text as textItem}
				{#if typeof textItem !== 'string'}
					<ol class="text">
						{#each textItem as textLi}
							<li>{textLi}</li>
						{/each}
					</ol>
				{:else}
					<div class="text">{textItem}</div>
				{/if}
			{/each}
		{/each}

		<div class="btn-wrap btn-wrap-3"><Button>Download the Application</Button></div>
	</div>
</section>

<style>
	section {
		position: relative;
		padding-top: 120px;
	}
	.content {
		position: static;
	}
	.text {
		margin-bottom: 20px;
	}
	.btn-wrap {
		margin-bottom: 30px;
	}

	h3 {
		margin-top: 80px;
	}
	.btn-wrap-3 {
		margin-top: 50px;
	}
</style>
