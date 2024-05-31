<section class="page">
	<div class="content">
		<slot />
	</div>
</section>

<style>
	section {
		position: relative;
		padding-top: 40px;
	}

	.content {
		position: static;
	}

	:global(.page .text) {
		margin: 20px 0;
	}

	:global(.page .btn-wrap) {
		text-align: center;
		max-width: 760px;
	}

	:global(.page ul li) {
		margin: 10px 0;
		margin-left: 16px;
	}

	:global(.page ul.desc li) {
		margin-left: 20px;
	}

	:global(.page ul.desc) {
		margin-top: 20px;
	}

	:global(.page .desc) {
		margin-top: 30px;
	}

	:global(.page ul) {
		list-style-type: disc;
	}

	:global(.page ol li) {
		margin-bottom: 20px;
		margin-top: 20px;
		margin-left: 16px;
	}
	:global(.page h2) {
		margin-top: 100px;
	}
	:global(.page h3) {
		margin-top: 80px;
	}

	@media screen and (min-width: 1201px) {
		:global(.page .content) {
			max-width: 844px;
		}
	}

	@media screen and (max-width: 960px) {
		section {
			padding-top: 0;
		}
	}

	:global(.page .btn-wrap) {
		margin-top: 30px;
		margin-bottom: 50px;
	}
</style>
