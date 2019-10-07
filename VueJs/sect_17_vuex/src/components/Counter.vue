<template>
	<div>
		<button class="btn btn-primary" @click="increment(100)">
			Increment by 100
		</button>
		<button class="btn btn-primary" @click="decrement(50)">
			Decrement by 50
		</button>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
	methods: {
		...mapMutations(["increment", "decrement"])
	}
};
</script>