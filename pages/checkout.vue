<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from "@/stores/user.store"

const userStore = useUserStore();
const route = useRouter();

let stripe = null;
let elements = null;
let card = null;
let form = null;
let total = ref(0);
let clientSecret = null;
let currentAddress = ref(null);
let isProcessing = ref(false);

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

const stripeInit = async () => { }

const pay = async () => { }

const createOrder = async (stripeId) => { }

const showError = async (errorMsgText) => { }

onMounted(() => {
	isProcessing.value = true

	userStore.checkout.forEach(item => {
		total.value += item.price
	})
})

watch(() => total.value, () => {
	if (total.value > 0) {
		stripeInit()
	}
})
</script>

<template>
	<main-layout>
		<div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2 ">
			<div class="md:flex gap-4 justify-between mx-auto w-full">

				<!-- Address/Products_Section -->
				<div class="md:w-[65%]">
					<div class="bg-white rounded-lg p-4">
						<div class="text-xl font-semibold mb-2">Shipping Address</div>

						<div v-if="false">
							<!-- Update_Address -->
							<NuxtLink to="/address" class="flex items-center pb-2 text-blue-500 hover:text-red-400">
								<Icon name="mdi:plus" size="18" class="mr-2" />
								Update Address
							</NuxtLink>

							<!-- Delivery_Address_Details -->
							<div class="pt-2 border-t">
								<div class="underline pb-1">Delivery Address</div>

								<ul class="text-xs">
									<li class="flex items-center gap-2">
										<div class="">Contact Name:</div>
										<div class="font-bold"> TEST</div> <!--  currentAddress.data.name -->
									</li>
									<li class="flex items-center gap-2">
										<div class="">Address:</div>
										<div class="font-bold"> TEST</div> <!--  currentAddress.data.name -->
									</li>
									<li class="flex items-center gap-2">
										<div class="">Zip Code:</div>
										<div class="font-bold"> TEST</div> <!--  currentAddress.data.name -->
									</li>
									<li class="flex items-center gap-2">
										<div class="">City:</div>
										<div class="font-bold"> TEST</div> <!--  currentAddress.data.name -->
									</li>
									<li class="flex items-center gap-2">
										<div class="">Country:</div>
										<div class="font-bold"> TEST</div> <!--  currentAddress.data.name -->
									</li>
								</ul>
							</div>
						</div>

						<!-- Add_Address -->
						<NuxtLink v-else to="/address" class="flex items-center text-blue-500 hover:text-red-400">
							<Icon name=" mdi:plus" size="18" class="mr-2" />
							Add New Address
						</NuxtLink>
					</div>

					<!-- Products -->
					<div id="Items" class="bg-white rounded-lg p-4 mt-4">
						<div v-for="product in products " :key="product.id">
							<CheckoutItem :product="product" />
						</div>
					</div>
				</div>


				<div class="md:hidden block my-4" />


				<!-- Order_Section -->
				<div class="md:w-[35%]">
					<div id="PlaceOrder" class="bg-white rounded-lg p-4">
						<div class="text-2xl font-extrabold mb-2">Summary</div>

						<div class="flex items-center justify-between my-4">
							<div>Total Shipping</div>
							<div>Free</div>
						</div>

						<div class="border-t" />

						<!-- Total_Price -->
						<div class="flex items-center justify-between my-4">
							<div class="font-semibold">Total</div>
							<div class="text-2xl font-semibold">
								$ <span class="font-extrabold">{{ total / 100 }}</span>
							</div>
						</div>

						<!-- Payment_Form -->
						<form @submit.prevent="pay()">
							<div id="card-element" class="border border-gray-500 p-2 rounded-sm" />
							<p id="card-error" role="alert" class="text-red-500 text-center font-semibold" />

							<button :disabled="isProcessing" type="submit"
								:class="[isProcessing ? 'opacity-70' : 'opacity-100', 'mt-4 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full']">
								<Icon v-if="isProcessing" name="eos-icons:loading" />
								<div v-else>Place Order</div>
							</button>
						</form>
					</div>

					<div class="bg-white rounded-lg p-4 mt-4">
						<div class="text-lg font-semibold mb-2 mt-2">
							AliExpress
						</div>
						<p class="my-2">AliExpress keeps your information and payment safe</p>
					</div>
				</div>
			</div>
		</div>
	</main-layout>
</template>

<style scoped></style>