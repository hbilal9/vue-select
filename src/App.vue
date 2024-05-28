<script setup lang="ts">
import { ref } from "vue";
const multiple = ref(false);
const data = ref("");
const options = [
	{
		id: 1,
		name: "Jone Shone",
	},
	{
		id: 2,
		name: "Snow White",
	},
	{
		id: 3,
		name: "kate Winslet",
	},
	{
		id: 4,
		name: "Brad Pitt",
	},
	{
		id: 5,
		name: "Leonardo DiCaprio",
	},
	{
		id: 6,
		name: "Tom Cruise",
	},
	{
		id: 7,
		name: "Tom Hanks",
	},
	{
		id: 8,
		name: "Neh Hardy",
	},
	{
		id: 9,
		name: "Bradley Cooper",
	},
	{
		id: 10,
		name: "Robert Downey Jr.",
	},
];

// const handleMultiple = () => {
// 	multiple.value = !multiple.value;
// };
</script>

<template>
	<v-select
		v-model="data"
		:options="options"
		:reduce="(opt: any) => opt.id"
		:label="(opt: any) => opt.name"
		plateholder="choose user"
		:multiple="multiple"
	/>
	<label>
		<input type="checkbox" v-model="multiple" />
		Multiple {{ multiple }}
	</label>
	&nbsp; output: {{ data }}
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
./components/Select.vue
