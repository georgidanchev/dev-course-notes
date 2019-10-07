<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Filters & Mixins</h1>
				<p>{{ text | toUppercase | toLowercase }}</p>
				<hr />
				<button @click="fruits.push('Berries')">Add New Item</button>
				<input v-model="filterText" />
				<ul>
					<li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
				</ul>
				<hr />
				<appList></appList>
			</div>
		</div>
	</div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixin";

export default {
	mixins: [fruitMixin],
	data() {
		return {
			text: "Hello there!",
			fruits: ["Apple", "Banana", "Mango", "Melon"],
			filterText: ""
		};
	},
	filters: {
		toUppercase(value) {
			return value.toUpperCase();
		}
	},
	computed: {
		filteredFruits() {
			return this.fruits.filter(element => {
				return element.match(this.filterText);
			});
		}
	},
	components: {
		appList: List
	}
};
</script>

<style>
</style>
