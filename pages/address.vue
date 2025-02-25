<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue'

const contactName = ref('')
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
            v-model:input="contactName"
            inputType="text"
            :error="error && error.type == 'contactName' ? error.message : ''"
          />
          <TextInput
            class="w-full mt-2"
            placeholder="Address"
            v-model:input="address"
            inputType="text"
            :error="error && error.type == 'address' ? error.message : ''"
          />
        </form>
      </div>
    </div>
  </main-layout>
</template>
