<template>
	<div id="read" class="text-center pt-5">
		<nav class="pt-5">
			<button class="btn btn-primary" v-on:click="prevChapter">Prev chapter</button>
			<button class="btn btn-primary ml-2" v-on:click="nextChapter">Next chapter</button>
		</nav>

		<Chapter v-if="currentChapter" :chapter="currentChapter" />
	</div>
</template>

<script>
	import Chapter from '@/components/Chapter.vue'
	import readData from '@/assets/data.json'

	export default {
		name: 'Read',
		data: function () {
			return {
				currentChapter: null,
				chapters: readData,
			}
		},
		methods: {
			nextChapter() {
				var currentIndex = this.chapters.indexOf(this.currentChapter);
				if (currentIndex == this.chapters.length - 1) {
					// ultimo chapter
				}
				else {
					this.currentChapter = this.chapters [ currentIndex + 1 ];
				}
			},
			prevChapter() {
				var currentIndex = this.chapters.indexOf(this.currentChapter);
				if (currentIndex == 0) {
					// primer chapter
				}
				else {
					this.currentChapter = this.chapters [ currentIndex - 1 ];
				}
			}
		},
		mounted: function() {
			this.currentChapter = this.chapters [0];
		},
		components: {
			Chapter
		}
	}
</script>
