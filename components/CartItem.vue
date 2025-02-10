<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { useUserStore } from "@/stores/user.store";

const route = useRoute();

const userStore = useUserStore();

const props = defineProps(['product', 'selectedArray'])

const { product, selectedArray } = toRefs(props)

const emit = defineEmits(['selectedRadio'])

let isHover = ref(false)
let isSelected = ref(false)

const removeFormCart = () => {
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
	</div>
</template>

<style scoped></style>