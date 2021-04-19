<template>
	<div id="index" class="pt-5">
		<h1 class="text-center">Index</h1>

		<ul>
			<li v-for="chapter in chapters" :key="chapter.id">{{ chapter.title }}</li>
		</ul>
	</div>
</template>

<script>
	import readData from '@/assets/data.json'

	export default {
		name: 'Read',
		data: function () {
			return {
				currentChapter: null,
				chapters: readData,
			}
		},
	}
</script>
