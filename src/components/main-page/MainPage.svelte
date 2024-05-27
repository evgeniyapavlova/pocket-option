<script>
	import Intro from './Section1Intro.svelte';
	import Section2Reliability from './Section2Reliability.svelte';
	import Section3Reputation from './Section3Reputation.svelte';
	import Section4Safety from './Section4Safety.svelte';
	import Section5Functionality from './Section5Functionality.svelte';
	import Section6Support from './Section6Support.svelte';
	import Section7SpecialOffer from './Section7SpecialOffer.svelte';
	import Pattern1 from './Pattern1.svelte';
</script>

<Intro />
<div class="pattern-1-wrap">
	<Section2Reliability />
	<Section3Reputation />
	<Pattern1 />
</div>
<Section4Safety />

<Section5Functionality />
<Section6Support />
<Section7SpecialOffer />

<style>
	.pattern-1-wrap {
		position: relative;
		overflow: hidden;
	}
</style>
