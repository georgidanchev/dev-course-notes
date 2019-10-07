<template>
	<div>
		<h1>The User Page</h1>
		<!-- <p>Loaded ID: {{ id }}</p> -->
		<button @click="NavToHome" class="btn btn-primary">Go to home</button>
		<hr />
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	methods: {
		NavToHome() {
			this.$router.push({ path: "home" });
		}
	}
};
</script>