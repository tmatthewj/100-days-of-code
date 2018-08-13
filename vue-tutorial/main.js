Vue.component('product', {
	props: {
		premium: {
			type: Boolean,
			required: true
		}
	},
	template:
		`<div class="product">

      		<div class="product-image">
        		<img :src="image" />
      		</div>

      		<div class="product-info">
			  <h1>{{ title }}</h1>
			  <h2>{{ description }}</h2>
	          <p v-if="inStock">In Stock</p>
	          <p v-else>Out of Stock</p>
	          <p>Shipping: {{ shipping }}</p>

	          <ul>
	            <li v-for="detail in details">{{ detail }}</li>
	          </ul>

	          <div class="color-box"
	               v-for="(variant, index) in variants"
	               :key="variant.variantId"
	               :style="{ backgroundColor: variant.variantColor }"
	               @mouseover="updateProduct(index)">
	          </div>

	          <button v-on:click="addToCart"
	            :disabled="!inStock"
	            :class="{ disabledButton: !inStock || stockRemaining == 0}">Add to cart</button>
			  <button @click="removeFromCart"
				:class="{ disabledButton: cartCount == 0 }">Remove</button>

       		</div>
    	</div>`,
	data() {
		return {
			product: 'Socks',
			brand: 'Vue Mastery',
			description: "Made with the best cotton",
			selectedVariant: 0,
			details: ['80% cotton', '20% polyester', 'Gender-neutral'],
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
					variantQuantity: 5
				}
			],
			sizes: [8,9,10],
			cartCount: 0
		}
	},
	methods: {
		addToCart() {
			var count = prevCount = this.cartCount;
			count += 1;
			if (count >= this.inStock) {
				count = this.inStock;
			}
			this.cartCount = count;
			this.$emit('update-cart-global', this.cartCount - prevCount, this.variantId)
		},
		updateProduct: function(index) {
			this.selectedVariant = index;
		},
		removeFromCart() {
			var count = prevCount = this.cartCount;
			count -= 1;
			if (count < 0) {
				this.cartCount = 0;
			} else {
				this.cartCount = count;
			}
			this.$emit('update-cart-global', this.cartCount - prevCount, this.variantId)
		}
	},
	computed: {
		title() {
			if (this.onSale) {
				return this.brand + ' ' + this.product+ ' (Sale!)';
			}
			return this.brand + ' ' + this.product;
		},
		variantId() {
			return this.variants[this.selectedVariant].variantId;
		},
		image() {
			return this.variants[this.selectedVariant].variantImage;
		},
		stockRemaining() {
			return this.variants[this.selectedVariant].variantQuantity - this.cartCount;
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity
		},
		shipping() {
		  if (this.premium) {
			return "Free"
		  }
			return 2.99
		}
	}
})

var app = new Vue({
	el: '#app',
	data: {
		premium: true,
		cartGlobal: [],
		cartCountGlobal: 0
	},
	methods: {
		updateCartGlobal(cartCount, productVariantId) {
			for (i = 0; i < Math.abs(cartCount); i++) {
				if (cartCount > 0){
					this.cartGlobal.push(productVariantId);
				} else {
					this.cartGlobal.pop(productVariantId);
				}
			}
			this.cartCountGlobal = this.cartGlobal.length;
		}
	}
})
