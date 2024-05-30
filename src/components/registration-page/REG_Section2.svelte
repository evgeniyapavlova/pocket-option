<script>
	import { section2 } from './content';
</script>

{#each section2 as { title, text }}
	<h2>{@html title}</h2>
	<div class="desc">{text}</div>
{/each}
