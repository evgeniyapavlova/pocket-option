<script>
	import Intro from './Section1Intro.svelte';
	import Section2Reliability from './Section2Reliability.svelte';
	import Section3Reputation from './Section3Reputation.svelte';
	import Section4Safety from './Section4Safety.svelte';
	import Section5Functionality from './Section5Functionality.svelte';
	import Section6Support from './Section6Support.svelte';
	import Section7SpecialOffer from './Section7SpecialOffer.svelte';
	import Pattern1 from './Pattern1.svelte';
	import Pattern2 from './Pattern2.svelte';
	import Pattern3 from './Pattern3.svelte';
</script>

<Intro />
<div class="pattern-1-wrap pattern-wrap">
	<Section2Reliability />
	<Section3Reputation />
	<Pattern1 />
</div>

<div class="pattern-2-wrap pattern-wrap">
	<Section4Safety />
	<Section5Functionality />
	<Pattern2 />
</div>

<div class="pattern-3-wrap pattern-wrap">
	<Section6Support />
	<Section7SpecialOffer />
	<Pattern3 />
</div>
