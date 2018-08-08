var app = new Vue({
	el: '#app',
	data: {
		product: "Socks",
		description: "Made with the best cotton",
		image: "./assets/vmSocks-green.png",
		url: "https://www.decathlon.in/p/8313153_arpenaz-50-warm-hiking-socks-grey-and-black-2-pairs.html",
		inStock: false,
		onSale: true,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{
				variantId: 2234,
				variantColor: "Green" 
			},
			{
				variantId: 2235,
				variantColor: "Blue" 	
			}
		],
		sizes: [8,9,10]
	}
})