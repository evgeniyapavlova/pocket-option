<script>
	import { section5 } from './content';
	import DisplayAnyContent from '$common/DisplayAnyContent/DisplayAnyContent.svelte';
</script>

<div class="content-wrap">
	<div class="text-content">
		<DisplayAnyContent imgFolder="registration-page" content={section5} />
	</div>
</div>

<style>
	.content-wrap {
		padding-top: 20px;
		padding-bottom: 80px;
		background-image: url('/images/registration-page/pocket_app.webp');
		background-repeat: no-repeat;
		background-size: 260px 515px;
		background-position: right 0 bottom 50%;
	}
	.text-content {
		width: 60%;
	}

	@media screen and (max-width: 1200px) {
		.content-wrap {
			background-position: right 0 bottom 50%;
		}
	}

	@media screen and (max-width: 960px) {
		.text-content {
			width: 100%;
		}
		.content-wrap {
			padding-bottom: 750px;
			background-size: 320px 634px;
			background-position: left 0 bottom 80px;
		}
	}

	@media screen and (max-width: 368px) {
		.content-wrap {
			background-size: 100% auto;
			padding-bottom: calc(200% + 100px);
		}
	}
</style>
