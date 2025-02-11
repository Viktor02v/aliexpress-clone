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

				<!-- Address_Section -->
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

					<div id="Items" class="bg-white rounded-lg p-4 mt-4">
						<div v-for="product in products " :key="product.id">
							<CheckoutItem :product="product" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</main-layout>
</template>

<style scoped></style>