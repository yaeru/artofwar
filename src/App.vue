<template>
	<div id="app">

		<div id="nav" class="pt-3 text-center fixed-top">
			<router-link to="/" class="btn btn-primary">Home</router-link>
			<router-link to="/read" class="btn btn-primary ml-2">Read</router-link>
			<router-link to="/about" class="btn btn-primary ml-2">About</router-link>
		</div>

		<div class="container">
			<router-view class="my-5" />
		</div>
	</div>
</template>

<style type="text/css">
	#home, #about, #read {
		margin: 0 !important;
		min-height: 100vh;
	}
</style>

