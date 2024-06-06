<script setup lang="ts">
import { ref } from "vue";
// import VSelect from "./Select.vue";
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
		name: "Leonardo DiCaprio what son",
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
		placeholder="choose user"
		:multiple="multiple"
		class="test"
		filterClass="filter"
	/>
	<label>
		<input type="checkbox" v-model="multiple" />
		Multiple {{ multiple }}
	</label>
	&nbsp; output: {{ data }}
</template>

<style>
.test {
	border: 2px solid red !important;
	border-radius: 50px !important;
	width: 30rem !important;
	padding: 5rem !important;
}

.filter {
	border: 2px solid red !important;
	border-radius: 50px !important;
}
</style>
