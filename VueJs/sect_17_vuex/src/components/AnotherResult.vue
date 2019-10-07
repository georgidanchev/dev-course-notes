<template>
	<div>
		<p>Counter is: {{ doubleCounter }}</p>
		<p>Number of clicks: {{ singleCounter }}</p>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";

export default {
	computed: {
		...mapGetters(["singleCounter", "doubleCounter"])
	}
};
</script>