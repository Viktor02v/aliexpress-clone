<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue';
const user = useSupabaseUser()

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
</script>

<template>
	<main-layout>
		<div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">

			<!-- Empty State -->
			<div v-if="false" class="h-[500px] flex items-center justify-center">
				<div class="pt-20">
					<img class="mx-auto" width="250" src="/cart-empty.png" alt="">

					<div class="text-xl text-center mt-4">
						No items yet?
					</div>

					<div v-if="!user" class="flex text-center">
						<NuxtLink to="/login"
							class="bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4">
							Sing In
						</NuxtLink>
					</div>
				</div>
			</div>


			<!-- Something IN -->
			<div v-else class="md:flex gap-4 justify-between mx-auto w-full">
				<div class="md:w-[65%]">
					<div class="bg-white rounded-lg p-4">
						<div class="text-2xl font-bold mb-2">
							Shopping Cart (0)
						</div>
					</div>

					<div class="bg-[#FEEEEF] rounded-lg p-4 mt-4">
						<div class="text-red-500 font-semibold">Welcome Deal applicable on 1 item only </div>
					</div>

					<!-- Cart Items -->
					<div id="Items" class="bg-white rounded-lg p-4 mt-4">
						<div v-for="product in products" :key="product.id" class="">
							<CartItem :product="product" :selectedArray="selectedArray" @selectedRadio="selectedRadioFunc" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</main-layout>
</template>

<style scoped></style>