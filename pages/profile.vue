<script setup lang="ts">
definePageMeta(
	{
		middleware:["auth"],
	}
)
const client = useSupabaseClient();
const user = useSupabaseUser()
const errorMsg = ref('');
const router = useRouter();

async function logout() {
	try {
		const { error } = await client.auth.signOut();
		if (error) throw error;
		router.push("/login")
	} catch (error) {
		errorMsg.value = error.message
	}
}
console.log(user.value)
</script>

<template>
	<div class="w-full h-screen flex items-center justify-center">
		<div class="p-10 gap-10 flex flex-col items-center justify-center">
			<h1 class="text-5xl">HEllo New Commer, It's Your Profile ;)</h1>
			<ul class="flex flex-col items-start self-start">
				<li>Email: <span>{{ user?.email }}</span></li>
				<li>Create At: <span>{{ user?.created_at }}</span></li>
				<li>ID: <span>{{ user?.id }}</span></li>
			</ul>
		</div>
		<div>
			<button @click="logout">
				Logout
			</button>
			<div class="text-red-500">{{ errorMsg }}</div>
		</div>
	</div>
</template>

<style scoped>
</style>