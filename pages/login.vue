<template>
	<div class="prose w-full max-w-2xl h-9">
		<h1>Log in to {{ title }}</h1>
		<button
			class="bg-blue-800 text-white font-bold py-2 px-4 transition-all rounded hover:scale-90 hover:bg-blue-500"
		>
			Log in with Github
		</button>
	</div>
</template>

<script setup>
const { title } = useCourse();
</script>
