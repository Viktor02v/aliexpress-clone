<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from "@/stores/user.store"

const userStore = useUserStore();
const user = useSupabaseUser();
const selectedArray = ref([]);

const products = ref([
	{
		id: 1,
		title: "title 1",
		description: "description 1 ",
		url: "http://picsum.photos/id/7/800/800",
		price: 999,
		rate: 3.5,
	},
	{
		id: 2,
		title: "title 1",
		description: "description 1 ",
		url: "http://picsum.photos/id/51/800/800",
		price: 999,
		rate: 3.6,
	},
])

const cards = ref([
	'visa.png',
	'mastercard.png',
	'paypal.png',
	'applepay.png'
])

const totalPriceComputed = computed(() => {
	let price = 0
	userStore.cart.forEach(prod => {
		price += prod.price
	});

	return price / 100
});

const selectedRadioFunc = (e) => {
	if (!selectedArray.value.length) {
		selectedArray.value.push(e)
		return
	}

	selectedArray.value.forEach((item, index) => {
		if (e.id != item.id) {
			selectedArray.value.push(e)
		} else {
			selectedArray.value.splice(index, 1);
		}
	})
};

const gotToCheckout = () => {
	let ids = []
	userStore.checkout = []
	selectedArray.value.forEach(item => ids.push(item.id))
	let res = userStore.cart.filter((item) => {
		return ids.indexOf(item.id) != -1
	})
	res.forEach(item => userStore.checkout.push(toRaw(item)))

	return navigateTo('/checkout');
};

onMounted(() => {
	setTimeout(() => userStore.isLoading = false, 200)
});
</script>

<template>
	<main-layout>
		<div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">

			<!-- Empty_State -->
			<div v-if="products && products.length <= 0" class="h-[500px] flex items-center justify-center">
				<div class="pt-20">
					<img class="mx-auto" width="250" src="/cart-empty.png" alt="">

					<div class="text-xl text-center mt-4">
						No items yet?
					</div>

					<!-- Sing_IN -->
					<div v-if="!user" class="flex text-center">
						<NuxtLink to="/login"
							class="bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4">
							Sing In
						</NuxtLink>
					</div>
				</div>
			</div>

			<!-- Something_IN_State -->
			<div v-else class="md:flex gap-4 justify-between mx-auto w-full">
				<!-- Items_Section -->
				<div class="md:w-[65%]">
					<div class="bg-white rounded-lg p-4">
						<div class="text-2xl font-bold mb-2">
							Shopping Cart (0)
						</div>
					</div>

					<!--Promo_Welcome-->
					<div class="bg-[#FEEEEF] rounded-lg p-4 mt-4">
						<div class="text-red-500 font-semibold">Welcome Deal applicable on 1 item only </div>
					</div>

					<!-- Cart_Items -->
					<div id="Items" class="bg-white rounded-lg p-4 mt-4">
						<div v-for="product in products" :key="product.id" class="">
							<CartItem :product="product" :selectedArray="selectedArray" @selectedRadio="selectedRadioFunc" />
						</div>
					</div>
				</div>

				<div class="md:hidden block my-4 " />

				<!--Summary_Section-->
				<div class="md:w-[35%]">
					<div id="Summary" class="bg-white rounded-lg p-4">
						<div class="text-2xl font-extrabold mb-2">
							Summary
						</div>

						<!-- Total_Price -->
						<div class="flex items-center justify-between my-4">
							<div class="font-semibold">Total</div>
							<div class="text-2xl font-semibold">
								$ <span class="font-extrabold">{{ totalPriceComputed }}</span>
							</div>
						</div>

						<!-- Checkout_Button -->
						<button @click="gotToCheckout"
							class="flex items-center justify-center bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4">
							Checkout
						</button>
					</div>

					<!-- Payment_Methods -->
					<div id="PaymentProtection" class="bg-white rounded-lg p-4 mt-4">
						<div class="text-lg font-semibold mb-2">Payment Methods</div>
						<div class="flex items-center justify-start gap-8 my-4">
							<div v-for="card in cards" :key="card">
								<img :src="card" class="h-6" alt="'Card'">
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</main-layout>
</template>

<style scoped></style>