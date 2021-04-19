<template>
	<div class="chapter pt-5">
		<h2 class="h5">Chapter {{ chapter.number }}</h2>
		<h1 class="text-uppercase h3 mb-0">{{ chapter.title }}</h1>


		
		<Item v-if="currentItem" :item="currentItem" class="mt-4 pb-5" />

		<nav class="pt-5">
			<button class="btn btn-secondary" v-on:click="prevItem">Prev item</button>
			<button class="btn btn-secondary ml-2" v-on:click="nextItem">Next item</button>
		</nav>

		<div class="fixed-bottom p-2 p-md-5">
			<div class="progress">
				<div class="progress-bar" role="progressbar" :style="'width:' + progress + '%;'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import Item from '@/components/Item.vue'
	export default {
		name: 'Chapter',
		data: function () {
			return {
				currentItem: null,
				progress: 0,
			}
		},
		props: {
			chapter: null
		},
		methods: {
			nextItem() {
				var currentIndex = this.chapter.items.indexOf(this.currentItem);
				if (currentIndex == this.chapter.items.length - 1) {
					// ultimo item
				}
				else {
					this.currentItem = this.chapter.items [ currentIndex + 1 ];
				}
				this.progressBar();
			},
			prevItem() {
				var currentIndex = this.chapter.items.indexOf(this.currentItem);
				if (currentIndex == 0) {
					// primer item
				}
				else {
					this.currentItem = this.chapter.items [ currentIndex - 1 ];
				}
				this.progressBar();
			},
			progressBar() {
				var currentIndex = this.chapter.items.indexOf(this.currentItem);
				this.progress = (currentIndex + 1 ) / this.chapter.items.length * 100;
				if( currentIndex == this.chapter.items.length -1 ){
					this.progress = 100;
				}
			}
		},
		mounted: function() {
			this.currentItem = this.chapter.items [0];
			//setInterval(() => this.nextItem(), 5000)
		},
		watch: {
			chapter: function() {
				this.currentItem = this.chapter.items [0];
				this.progressBar();
			}
		},
		components: {
			Item
		}
	}
</script>