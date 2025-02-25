<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue'
import { useUserStore } from '@/stores/user.store'

const userStore = useUserStore()
const contactName = ref('')
const address = ref(null)
const zipCode = ref(null)
const city = ref(null)
const country = ref(null)

let isWorking = ref(false)
let isUpdate = ref(false)
let currentAddress = ref(null)
let error = ref<Object | null>(null)

const submit = async () => {
  isWorking.value = true
  error.value = null

  if (!contactName.value) {
    error.value = { type: 'contactName', message: 'A contact name is required' }
    isWorking.value = false
  } else if (!address.value) {
    error.value = { type: 'address', message: 'An address is required' }
    isWorking.value = false
  } else if (!zipCode.value) {
    error.value = { type: 'zipCode', message: 'A zip code is required' }
    isWorking.value = false
  } else if (!city.value) {
    error.value = { type: 'city', message: 'A city is required' }
    isWorking.value = false
  } else if (!country.value) {
    error.value = { type: 'country', message: 'A country is required' }
    isWorking.value = false
  }
  // If there's an error in some field "return"
  if (error.value) {
    isWorking.value = false
    return
  }

  // MORE HERE
}

watchEffect(() => {
  userStore.isLoading = false
})
</script>

<template>
  <main-layout>
    <div id="AddressPage" class="mt-4 max-w-[500px] mx-auto px-2">
      <div class="mx-auto bg-white rounded-lg p-3">
        <div class="text-xl text-bold mb-2">Address Details</div>

        <form @submit.prevent="submit()">
          <TextInput
            class="w-full"
            placeholder="Contact Name"
            v-model="contactName"
            inputType="text"
            :error="error && error.type == 'contactName' ? error.message : ''"
          />
          <TextInput
            class="w-full mt-2"
            placeholder="Address"
            v-model="address"
            inputType="text"
            :error="error && error.type == 'address' ? error.message : ''"
          />
          <TextInput
            class="w-full mt-2"
            placeholder="Zip Code"
            v-model="zipCode"
            inputType="text"
            :error="error && error.type == 'zipCode' ? error.message : ''"
          />
          <TextInput
            class="w-full mt-2"
            placeholder="City"
            v-model="city"
            inputType="text"
            :error="error && error.type == 'city' ? error.message : ''"
          />
          <TextInput
            class="w-full mt-2"
            placeholder="Country"
            v-model="country"
            inputType="text"
            :error="error && error.type == 'country' ? error.message : ''"
          />
          <button
            :disabled="isWorking"
            type="submit"
            class="mt-6 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full"
          >
            <div v-if="!isWorking">Update Address</div>
            <Icon v-else name="eos-icons:loading" size="25" class="mr-2" />
          </button>
        </form>
      </div>
    </div>
  </main-layout>
</template>
