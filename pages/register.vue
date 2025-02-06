<script setup lang="ts">
const client = useSupabaseClient();
const email = ref('');
const password = ref('');
const errorMsg = ref('');
const successMsg = ref('');

async function signUp() {
	try {
		const { data, error } = await client.auth.signUp({
	email: email.value,
	password: password.value,
});
		if (error) throw error;
		successMsg.value = "Check our email to confirm your account."
	} catch (error) {
		errorMsg.value = error.message
	}
}
</script>

<template>

	<div class="w-full h-screen flex items-center justify-center">
		<div class="p-10 bg-black gap-2 flex flex-col items-center justify-center">
			<input v-model="email" type="text" />
			<input v-model="password" type="password" />
			<p class="text-red-500">{{ errorMsg }}</p>
			<p class="text-green-500">{{ successMsg }}</p>
			<button @click="signUp" type="button" class="bg-white">
				SignUp
			</button>
		</div>
	</div>
</template>

<style scoped></style>