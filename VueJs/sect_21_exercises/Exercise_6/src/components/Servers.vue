<template>
	<div class="col-xs-12 col-sm-6">
		<ul class="list-group">
			<appServer
				v-for="server in servers"
				:server="server"
				:key="server.id"
			></appServer>
		</ul>
	</div>
</template>

<script>
import { serverBus } from "../main";
import Server from "./Server.vue";

export default {
	data() {
		return {
			servers: [
				{ id: 1, status: "Normal" },
				{ id: 2, status: "Critical" },
				{ id: 3, status: "Unknown" },
				{ id: 4, status: "Normal" }
			]
		};
	},
	components: {
		appServer: Server
	}
};
</script>


