<script setup lang="ts">
import { defineProps } from "vue"

const props = defineProps(['product'])
const { product } = toRefs(props)
</script>

<template>
	<div class="flex justify-start my-2">
		<!-- Img -->
		<img :src="product.url" :alt="product.title" class="rounded-md md:w-[150px] w-[90px]" />

		<div class="overflow-hidden pl-2">
			<!-- Description -->
			<div class="flex items-center ">
				<!-- Promo_Welcome -->
				<span class=" bg-[#FD374F] text-white text-[9px] font-semibold px-1.5 rounded-sm min-w-[80px]">
					Welcome Deal
				</span>
				<!-- Product_Title -->
				<div class="truncate pl-2">{{ product.title }}</div>
			</div>

			<!-- Price -->
			<div class="text-lg font-semibold mt-2">
				$ <span class="font-bold">{{ product.price / 100 }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped></style>