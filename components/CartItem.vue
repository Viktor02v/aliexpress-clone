<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { useUserStore } from "@/stores/user.store";

const userStore = useUserStore();

const props = defineProps(['product', 'selectedArray'])

const { product, selectedArray } = toRefs(props)

const emit = defineEmits(['selectedRadio'])

let isHover = ref(false)
let isSelected = ref(false)

const removeFromCart = () => {
	userStore.cart.forEach((prod, index) => {
		if (prod.id === product?.value.id) {
			userStore.cart.splice(index, 1);
		}
	})
}

watch(() => isSelected.value, (val) => {
	emit('selectedRadio', { id: product?.value.id, val: val })
})
</script>

<template>
	<div class="flex justify-start my-2">

		<!-- Radio_Buttons -->
		<div class="my-auto">
			<div @mouseenter="isHover = true" @mouseleave="isHover = false"
				class="flex items-center justify-start p-0.5 cursor-pointer">
				<div @click="isSelected = !isSelected"
					:class="[isHover ? 'border-[#FD374F]' : 'border-gray-300', isSelected ? 'bg-[#FD374F]' : '', 'flex items-center justify-center h-[20px] w-[20px] rounded-full border mr-5 ml-2']">
					<div class="h-[8px] w-[8px] rounded-full bg-white" />
				</div>
			</div>
		</div>

		<!-- Img -->
		<img :src="product.url" :alt="product.title" class="rounded-md md:w-[150px] w-[90px]" />

		<div class="overflow-hidden pl-2 w-full">
			<div class="flex items-center justify-between w-full">
				<!-- Description -->
				<div class="flex items-center justify-between truncate ">

					<!-- Promo_Welcome -->
					<span
						class="sm:block hidden bg-[#FD374F] text-white text-[9px] font-semibold px-1.5 rounded-sm min-w-[80px]">
						Welcome Deal
					</span>

					<!-- Product_Title -->
					<div class="truncate sm:pl-2">
						{{ product.title }}
					</div>
				</div>

				<!-- Remove_Button -->
				<button @click="removeFromCart()" class="mx-3 sm:block hidden -mt-0.5 hover:text-red-500">
					<Icon name="material-symbols:delete-outline" size="20" />
				</button>
			</div>

			<!-- Price -->
			<div class="text-xl font-semibold">
				$ <span class="font-bold">{{ product.price / 100 }}</span>
			</div>

			<!-- Promo_Delivery-->
			<p class="text-[#009A66] text-xs font-semibold pt-1">
				Free 11-day delivery over $8.26
			</p>


			<!-- Promo_Spipping-->
			<p class="text-[#009A66] text-xs font-semibold pt-1">
				Free Shipping
			</p>

			<!-- Mobile_Remove_Button -->
			<div class="flex items-center justify-end">
				<button @click="removeFromCart()" class="sm:hidden block  -mt-0.5 hover:text-red-500">
					<Icon name="material-symbols:delete-outline" size="20" />
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>