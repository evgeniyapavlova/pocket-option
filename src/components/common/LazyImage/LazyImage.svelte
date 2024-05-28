<script>
	import { lazy } from './lazy';
	export let src, alt, className;
</script>

<img use:lazy={{ rootMargin: '-100px' }} {alt} data-src={src} class={className} />
