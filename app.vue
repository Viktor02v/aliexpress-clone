<script setup lang="ts">
import { useUserStore } from '@/stores/user.store'
const userStore = useUserStore()

const route = useRoute()

const windowWidth = ref<number>(0)

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  userStore.isLoading = false
  window.addEventListener('resize', updateWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})

watch(
  () => windowWidth.value,
  (newVal: number, oldVal: number) => {
    if (newVal >= 768) {
      userStore.isMenuOverlay = false
    }
  }
)

watch(
  () => route.fullPath,
  () => {
    userStore.isLoading = true
  }
)
</script>
<template>
  <div class="bg-[#F2F2F2] w-full h-full">
    <NuxtPage />

    <MenuOverlay
      :class="[
        {
          'max-h-[100vh] transition-all duration-200 ease-in visible':
            userStore.isMenuOverlay,
        },
        {
          'max-h-0 transition-all duration-200 ease-in invisible':
            !userStore.isMenuOverlay,
        },
      ]"
    />
  </div>
</template>
