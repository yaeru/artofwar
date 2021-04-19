<template>
	<div class="item">
		<h2>{{ item.count }}</h2>
		<p class="lead">
			{{ item.body }}
		</p>
	</div>
</template>

<script>
	export default {
		name: 'Item',
		props: {
			item: null
		}
	}
</script>