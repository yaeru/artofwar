<template>
	<div class="passage">
		<h2>{{ passage.count }}</h2>
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