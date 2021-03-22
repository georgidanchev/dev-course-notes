<style scoped>
img {
	width: 300px;
}

@media screen and (max-width: 700px) {
	img {
		display: block;
		margin: auto;
	}
}
</style>

<template>
	<header>
		<img :src="image" alt="" />
	</header>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			image: require("@/assets/logo.png")
		};
	}
};
</script>