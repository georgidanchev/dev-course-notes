
<style>
</style>

<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<br />
				<button class="btn btn-primary" @click="selectedComp = 'appBlue'">
					Load Blue Template
				</button>
				<button class="btn btn-success" @click="selectedComp = 'appGreen'">
					Load Green Template
				</button>
				<button class="btn btn-danger" @click="selectedComp = 'appRed'">
					Load Red Template
				</button>
				<hr />

				<!-- dynamic selecting components -->
				<component :is="selectedComp"><p>This is the content</p></component>

				<!-- static invoking of components -->
				<!-- <app-blue>
					<p>This is the blue content</p>
				</app-blue>
				<app-green>
					<p>This is the green content</p>
				</app-green>
				<app-red>
					<p>This is the red content</p>
				</app-red> -->
			</div>
		</div>
	</div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
	data() {
		return {
			selectedComp: "appBlue"
		};
	},
	components: {
		appBlue: Blue,
		appGreen: Green,
		appRed: Red
	}
};
</script>
