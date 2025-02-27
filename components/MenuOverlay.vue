<script setup lang="ts">
import { useUserStore } from '@/stores/user.store'
const userStore = useUserStore() ;

// const client = useSupabaseClient();
const user = ref(useSupabaseUser())

type NavigationItem = {
  name: string
  icon: string
  route: string
  badgeCount?: number
}

const navigationItems = computed(() => {
  const items: NavigationItem[] = [
    { name: 'My Orders', icon: 'ph:pen-light', route: 'orders' },
    {
      name: 'Cart',
      icon: 'ph:shopping-cart-simple-light',
      route: 'shoppingcart',
      badgeCount: userStore.cart.length,
    },
  ]

  if (user) {
    items.push({
      name: 'Sign Out',
      icon: 'ph:sign-out-light',
      route: 'signOut',
    })
  } else {
    items.push({
      name: 'Sign In / Register',
      icon: 'ph:sign-in-light',
      route: 'signIn',
    })
  }

  return items
})

const goTo = (route: string) => {
  userStore.isMenuOverlay = false
  return navigateTo(`/${route}`)
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

watch(user, (newUser: Object) => {
  if (newUser) {
    console.log('User is authenticated:', newUser)
  } else {
    console.log('User is not authenticated')
  }
})
</script>

<template>
  <div id="MenuOverlay" class="fixed z-50 bottom-0 h-full w-full bg-white px-3">
    <!-- MobileHeader -->
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

    <!-- MobileItems -->
    <div class="flex items-center justify-between pt-5">
      <ul class="w-full">
        <li
          v-for="item in navigationItems"
          :key="item.name"
          @click="
            item.route === 'signOut'
              ? signOut()
              : item.route === 'signIn'
              ? signIn()
              : goTo(item.route)
          "
          class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100 cursor-pointer"
        >
          <div class="flex items-center text-[20px] font-semibold">
            <Icon :name="item.icon" size="33" />
            <span class="pl-4">{{ item.name }}</span>
          </div>
          <div
            v-if="item.badgeCount !== undefined"
            class="flex items-center justify-center bg-[#FF4646] h-[35px] min-w-[35px] text-lg text-white rounded-full"
          >
            {{ item.badgeCount }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
