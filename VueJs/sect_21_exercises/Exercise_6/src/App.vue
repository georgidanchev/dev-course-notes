<template>
	<div class="container">
		<Header />
		<div class="row">
			<Server></Server>
			<ServerDetails></ServerDetails>
		</div>
		<Footer />
	</div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Server from "./components/Servers";
import ServerDetails from "./components/ServerDetails";

export default {
	components: {
		Header,
		Footer,
		Server,
		ServerDetails
	}
};
</script>

