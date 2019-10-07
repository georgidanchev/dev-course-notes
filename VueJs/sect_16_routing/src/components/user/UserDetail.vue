<template>
	<div>
		<h3>Some User Details</h3>
		<p>User loaded, has ID: {{ $route.params.id }}</p>
		<router-link tag="button" :to="link">Edit User</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			link: {
				name: "userEdit",
				params: {
					id: this.$route.params.id
				},
				query: {
					locale: "en",
					q: 100
				},
				hash: "#data"
			}
		};
	},
	beforeRouteEnter(to, from, next) {
		console.log("before route enter");
		if (true) {
			next();
		} else {
			next(false);
		}
	},
	beforeRouteLeave(to, from, next) {
		console.log("before route leave");
		next();
	}
};
</script>
