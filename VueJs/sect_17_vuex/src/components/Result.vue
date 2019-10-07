<template>
	<div>
		<p>Counter is: {{ doubleCounter }}</p>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["singleCounter", "doubleCounter"])
	}
};
</script>