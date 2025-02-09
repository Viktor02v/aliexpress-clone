<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue';

const products = [
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
	{
		id: 3,
		title: "title 1",
		description: "description 1 ",
		url: "http://picsum.photos/id/52/800/800",
		price: 999,
		rate: 3.7,
	},
	{
		id: 4,
		title: "title 1",
		description: "description 1 ",
		url: "http://picsum.photos/id/53/800/800",
		price: 999,
		rate: 3.8,
	},
	{
		id: 5,
		title: "title 1",
		description: "description 1 ",
		url: "http://picsum.photos/id/75/800/800",
		price: 999,
		rate: 3.9,
	},
	{
		id: 6,
		title: "title 1",
		description: "description 1 ",
		url: "http://picsum.photos/id/78/800/800",
		price: 999,
		rate: 4.1,
	},
	{
		id: 7,
		title: "title 1",
		description: "description 1 ",
		url: "http://picsum.photos/id/79/800/800",
		price: 999,
		rate: 4.1,
	},
	{
		id: 8,
		title: "title 1",
		description: "description 1 ",
		url: "http://picsum.photos/id/80/800/800",
		price: 9795,
		rate: 4.2,
	},
	{
		id: 9,
		title: "title 1",
		description: "description 1 ",
		url: "http://picsum.photos/id/84/800/800",
		price: 9990,
		rate: 4.3,
	},
	{
		id: 10,
		title: "title 1",
		description: "description 1 ",
		url: "http://picsum.photos/id/85/800/800",
		price: 7890,
		rate: 4.6,
	}
] 
</script>

<template>
	<MainLayout>
		<div d="IndexPage" class="mt-5 max-w-[1200px] mx-auto px-2">

			<div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
				<div v-if="products" v-for="product in products" :key="product">
					<!-- {{ product }} -->
					<ProductComponent :product="product" />
				</div>
			</div>

		</div>
	</MainLayout>
</template>
