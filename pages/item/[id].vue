<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue';

const images = ref([
	'',
	'https://picsum.photos/id/23/800/800',
	'https://picsum.photos/id/46/800/800',
	'https://picsum.photos/id/90/800/800',
	'https://picsum.photos/id/60/800/800',
	'https://picsum.photos/id/19/800/800'
])

let currentImage = ref()

watchEffect(() => {
	currentImage.value = 'https://picsum.photos/id/77/800/800'
	images.value[0] = 'https://picsum.photos/id/77/800/800'
})
</script>

<template>
	<MainLayout>
		<div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
			<div class="md:flex gap-4 justify-between mx-auto w-full">
				<!-- Images -->
				<div class="md:w-[40%]">
					<img v-if="currentImage" class="rounded-lg object-fit" :src="currentImage" alt="">

					<div v-if="images[0] !== ''" class="flex items-center justify-center mt-2">
						<div v-for="image in images" :key="image">
							<img @mouseover="currentImage = image" @click="currentImage = image" width="70"
								class="rounded-md object-fit border-[3px] cursor-pointer"
								:class="currentImage === image ? 'border-[#FF5353]' : ''" :src="image" alt="">
						</div>
					</div>
				</div>


				<!-- Description -->
				<div class="md:w-[60%] bg-white p-3 rounded-lg">
					<div v-if="true">
						<p class="mb-2">Title</p>
						<p class="font-light text-[12px] mb-2"> Description Section</p>
					</div>

					<div class="flex items-center pt-1.5">
						<span class="h-4 w-4 flex items-center justify-center rounded-full bg-[#FFD000] mr-2">
							<Icon name="material-symbols:star-rounded" size="12" />
						</span>
						<p class="text-[#FF5353]">Extra 5% off</p>
					</div>


				</div>

				<div class="flex items-center justify-start my-2">
					<Icon name="ic:baseline-star" color="#FF5353" />
					<Icon name="ic:baseline-star" color="#FF5353" />
					<Icon name="ic:baseline-star" color="#FF5353" />
					<Icon name="ic:baseline-star" color="#FF5353" />
					<Icon name="ic:baseline-star" color="#FF5353" />
					<span class="text-[13px] font-light ml-2">5 213 Reviews 1,000+ orders</span>
				</div>
			</div>
		</div>
	</MainLayout>
</template>

<style scoped></style>