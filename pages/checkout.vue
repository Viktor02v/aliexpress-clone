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

		</div>
	</main-layout>
</template>

<style scoped></style>