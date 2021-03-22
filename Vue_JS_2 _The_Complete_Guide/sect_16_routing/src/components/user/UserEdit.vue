<template>
	<div>
		<h3>Edit the User</h3>
		<p>Locale: {{ $route.query.locale }}</p>
		<p>Analytics: {{ $route.query.q }}</p>
		<hr />
		<button class="btn btn-primary" @click="confirmed = true">Confirm</button>
		<div style="height: 1500px; width: 100px;"></div>
		<p id="data">some extra data</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			confirmed: false
		};
	},
	beforeRouteLeave(to, from, next) {
		if (this.confirmed) {
			next();
		} else {
			if (confirm("are you sure?")) {
				next();
			} else {
				next(false);
			}
		}
	}
};
</script>
