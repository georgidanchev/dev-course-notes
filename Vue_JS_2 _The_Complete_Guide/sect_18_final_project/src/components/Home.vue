<template>
	<div>
		<h1>Trade or view your portfolio</h1>
		<h3>You may save or load your data</h3>
		<hr />
		<p>Your current funds: {{ funds | currency }}</p>
	</div>
</template>

<script>
export default {
	computed: {
		funds() {
			return this.$store.getters.funds;
		}
	}
};
</script>

