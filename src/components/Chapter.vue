<template>
	<div class="chapter pt-5">
		<h2 class="h5">Chapter {{ chapter.number }}</h2>
		<h1 class="text-uppercase h3 mb-0">{{ chapter.title }}</h1>
		
		<Passage v-if="currentPassage" :passage="currentPassage" class="mt-4 pb-5" />

		<nav class="pt-5">
			<button class="btn btn-secondary" v-on:click="prevPassage">Prev passage</button>
			<button class="btn btn-secondary ml-2" v-on:click="nextPassage">Next passage</button>
		</nav>

		<div class="fixed-bottom p-2 p-md-5">
			<div class="progress">
				<div class="progress-bar" role="progressbar" :style="'width:' + progress + '%;'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import Passage from '@/components/Passage.vue'
	export default {
		name: 'Chapter',
		data: function () {
			return {
				currentPassage: null,
				progress: 0,
			}
		},
		props: {
			chapter: null
		},
		methods: {
			nextPassage() {
				var currentIndex = this.chapter.passage.indexOf(this.currentPassage);
				if (currentIndex == this.chapter.passage.length - 1) {
					// ultimo passage
				}
				else {
					this.currentPassage = this.chapter.passage [ currentIndex + 1 ];
				}
				this.progressBar();
			},
			prevPassage() {
				var currentIndex = this.chapter.passage.indexOf(this.currentPassage);
				if (currentIndex == 0) {
					// primer passage
				}
				else {
					this.currentPassage = this.chapter.passage [ currentIndex - 1 ];
				}
				this.progressBar();
			},
			progressBar() {
				var currentIndex = this.chapter.passage.indexOf(this.currentPassage);
				this.progress = (currentIndex + 1 ) / this.chapter.passage.length * 100;
				if( currentIndex == this.chapter.passage.length -1 ){
					this.progress = 100;
				}
			}
		},
		mounted: function() {
			this.currentPassage = this.chapter.passage [0];
			//setInterval(() => this.nextPassage(), 5000)
		},
		watch: {
			chapter: function() {
				this.currentPassage = this.chapter.passage [0];
				this.progressBar();
			}
		},
		components: {
			Passage
		}
	}
</script>