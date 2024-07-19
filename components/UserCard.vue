<template>
	<div v-if="user" class="rounded p-3 flex items-center space-x-3 bg-white">
		<img
			class="rounded-full w-12 h-12 border-2 border-blue-400"
			:src="profile"
			alt=""
		/>
		<div class="text-right">
			<h5 class="font-medium">{{ name }}</h5>
			<button @click="logout" class="text-sm underline text-slate-500">
				Log out
			</button>
		</div>
	</div>
</template>
<script lang="ts" setup>
const supabase = useSupabaseClient();
const user = await supabase.auth.getUser();

const name = computed(() => user.data?.user?.user_metadata.full_name);

const profile = computed(() => user.data?.user?.user_metadata.avatar_url);

const logout = async () => {
	const { error } = await supabase.auth.signOut();

	if (error) {
		console.error(error);
	}
};
</script>
