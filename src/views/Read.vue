<template>
	<div id="read" class="text-center pt-5">
		<nav>
			<button class="btn btn-primary" v-on:click="prevChapter">Prev chapter</button>
			<button class="btn btn-primary ml-2" v-on:click="nextChapter">Next chapter</button>
		</nav>

		<Chapter v-if="currentChapter" :chapter="currentChapter" />
	</div>
</template>

<script>
	import Chapter from '@/components/Chapter.vue'

	export default {
		name: 'Read',
		data: function () {
			return {
				currentChapter: null,
				chapters: [
					{
						title: 'LAYING PLANS',
						number: '1',
						items: [
							{
								count: '1',
								body: '1. Sun Tzu said: The art of war is of vital importance to the State.'
							},
							{
								count: '2',
								body: '2. It is a matter of life and death, a road either to safety or to ruin. Hence it is a subject of inquiry which can on no account be neglected.'
							}
						],
					},
					{
						title: 'WAGING WAR',
						number: '2',
						items: [
							{
								count: '1',
								body: '1. Sun Tzu said: In the operations of war, where there are in the field a thousand swift chariots, as many heavy chariots, and a hundred thousand mail-clad soldiers, with provisions enough to carry them a thousand LI, the expenditure at home and at the front, including entertainment of guests, small items such as glue and paint, and sums spent on chariots and armor, will reach the total of a thousand ounces of silver per day. Such is the cost of raising an army of 100,000 men.'
							},
							{
								count: '2',
								body: '2. Sun Tzu said: In the operations of war, where there are in the field a thousand swift chariots, as many heavy chariots, and a hundred thousand mail-clad soldiers, with provisions enough to carry them a thousand LI.'
							},
							{
								count: '3',
								body: '3. the expenditure at home and at the front, including entertainment of guests, small items such as glue and paint, and sums spent on chariots and armor, will reach the total of a thousand ounces of silver per day. Such is the cost of raising an army of 100,000 men.'
							}
						]
					},
				]
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
