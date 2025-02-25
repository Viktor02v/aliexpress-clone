<script setup lang="ts">
import { useUserStore } from '@/stores/user.store'

const userStore = useUserStore()

// const client = useSupabaseClient();
// const user = useSupabaseUser();

const goTo = (url) => {
  userStore.isMenuOverlay = false
  return navigateTo(`/${url}`)
}

const signOut = () => {
  client.auth.signOut()
  userStore.isMenuOverlay = false
  return navigateTo('/')
}

const signIn = () => {
  userStore.isMenuOverlay = false
  return navigateTo('/auth')
}
</script>

<template>
  <div id="MenuOverlay" class="fixed z-50 bottom-0 h-full w-full bg-white px-3">
    <div class="flex items-center justify-between py-5">
      <NuxtLink to="/" @click="userStore.isMenuOverlay = false">
        <NuxtImg width="170" src="/Aliexpress-logo.png" />
      </NuxtLink>

      <button
        @click="userStore.isMenuOverlay = false"
        class="rounded-full p-1 hover:bg-gray-200"
      >
        <Icon name="mdi:close" size="30" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
