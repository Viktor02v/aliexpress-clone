<script setup lang="ts">
const client = useSupabaseClient();
const router = useRouter();


const email = ref("");
const password = ref(null);
const errorMsg = ref('');


async function signIn() {
	try {
		const { error } = await client.auth.signInWithPassword({
			email: email.value,
			password: password.value,
		});
		if (error) throw error;
		router.push("/profile")
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
			<button @click="signIn" type="button" class="bg-white">
				Check
			</button>
		</div>
	</div>
</template>

<style scoped></style>