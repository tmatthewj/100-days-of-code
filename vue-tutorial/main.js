var app = new Vue({
	el: '#app',
	data: {
		brand: "Vue Mastery",
		product: "Socks",
		description: "Made with the best cotton",
		selectedVariant: 0,
		onSale: true,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{
				variantId: 2234,
				variantColor: "#41B883",
				variantImage: "./assets/vmSocks-green.png",
				variantQuantity: 10
			},
			{
				variantId: 2235,
				variantColor: "#34495E",
				variantImage: "./assets/vmSocks-blue.png",
				variantQuantity: 0
			}
		],
		sizes: [8,9,10],
		cartCount: 0
	},
	methods: {
		addToCart() {
			var count = this.cartCount;
			count += 1;
			if (count >= this.inStock) {
				count = this.inStock;
			}
			this.cartCount = count;
		},
		updateProduct: function(index) {
			this.selectedVariant = index;
		},
		removeFromCart() {
			var count = this.cartCount;
			count -= 1;
			if (count < 0) {
				this.cartCount = 0; 
			} else {
				this.cartCount = count;
			}
		}
	},
	computed: {
		title() {
			if (this.onSale) {
				return this.brand + ' ' + this.product+ ' (Sale!)';
			}
			return this.brand + ' ' + this.product;
		},
		image() {
			return this.variants[this.selectedVariant].variantImage;
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity
		}
	}
})