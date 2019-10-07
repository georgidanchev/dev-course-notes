<template>
	<div class="container">
		<appHeader :quoteCount="quotes.length" :maxQuotes="maxQuotes"></appHeader>
		<appNewQuote @quoteAdded="newQuote"></appNewQuote>
		<appQuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"></appQuoteGrid>
		<div class="row">
			<div class="col-sm-12 text-center">
				<div class="alert-info">Info: click on a Quite to delete it!</div>
			</div>
		</div>
	</div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";

export default {
	data() {
		return {
			quotes: ["Default Quote"],
			maxQuotes: 10
		};
	},
	methods: {
		newQuote(quote) {
			if (this.quotes.length >= this.maxQuotes) {
				return alert("Please delete Quotes first!");
			}
			this.quotes.push(quote);
		},
		deleteQuote(index) {
			this.quotes.splice(index, 1);
		}
	},
	components: {
		appQuoteGrid: QuoteGrid,
		appNewQuote: NewQuote,
		appHeader: Header
	}
};
</script>

<style>
</style>
