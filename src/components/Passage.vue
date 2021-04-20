<template>
	<div class="passage">
		<h3 class="h5">Passage {{ passage.count }}</h3>
		<p class="lead">
			{{ passage.body }}
		</p>
	</div>
</template>

<script>
	export default {
		name: 'Passage',
		props: {
			passage: null
		}
	}
</script>