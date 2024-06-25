<script setup lang="ts">
import { ref, computed, watch } from "vue";

/*
USAGE:
<Select
	:options="options"
	:reduce="(item: any) => item.id"
	:label="(item: any) => item.name"
	v-model="test"
	:multiple="true"
/>
*/

defineOptions({
	inheritAttrs: false,
});

const props = withDefaults(
	defineProps<{
		modelValue?: string | number | null | string[];
		options: Array<object | string>;
		reduce: (item: any) => any;
		label: (item: any) => any;
		multiple?: boolean;
		placeholder?: string;
		filterClass?: string;
	}>(),
	{
		multiple: false,
		placeholder: "Select an option",
	}
);
const emits = defineEmits(["update:modelValue", "change"]);

// const multiple = ref(false);
const filter = ref("");

const filterOptions = computed(() => {
	if (filter.value == "") {
		return props.options;
	}
	return props.options.filter((op) => props.label(op).toLowerCase().includes(filter.value.toLowerCase()));
});
const selectedOption = ref<string | null>(null);
const selectedItemNames = ref<any>([]);
let uniqueSet = new Set();
const selectedOptions = ref<any[]>([]);

watch(
	() => props.multiple,
	() => {
		filter.value = "";
		selectedItemNames.value = [];
		selectedOption.value = null;
		selectedOptions.value = [];
		uniqueSet = new Set();
		emits("update:modelValue", null);
	}
);

const handleClick = (item: any) => {
	selectedOption.value = item;
	selectedItemNames.value[0] = props.label(item);
	emits("change", props.reduce(item));
	emits("update:modelValue", props.reduce(item));
};

const isCheckboxSelected = (item: any) => {
	return uniqueSet.has(props.reduce(item));
};

const isChecked = (item: any, event: Event) => {
	const checked = (event.target as HTMLInputElement).checked;
	if (checked) {
		selectedItemNames.value.push(props.label(item));
		// selectedOptions.value.push(props.reduce(item));
		uniqueSet.add(props.reduce(item));
		emits("update:modelValue", Array.from(uniqueSet));
		emits("change", Array.from(uniqueSet));
	} else {
		selectedOptions.value = selectedOptions.value.filter((op) => op != props.reduce(item));
		selectedItemNames.value = selectedItemNames.value.filter((op: any) => op != props.label(item));
		uniqueSet.delete(props.reduce(item));
		emits("update:modelValue", Array.from(uniqueSet));
		emits("change", Array.from(uniqueSet));
	}
};
</script>

<template>
	<div class="dropdown dropdown-bottom z-20">
		<label tabindex="0" :class="$attrs.class" class="label">
			<span v-if="multiple && selectedItemNames.length == 0">{{ placeholder }}</span>
			<div v-else-if="multiple" class="flex gap-1">
				<span class="rounded-xl bg-gray-200 px-2 py-1">{{ selectedItemNames[0] }}</span>
				<span class="rounded-xl bg-gray-200 px-2 py-1" v-if="selectedItemNames.length >= 2">
					{{ selectedItemNames[1] }}
				</span>
				<span class="rounded-xl bg-gray-200 px-2 py-1 text-sm" v-if="selectedItemNames.length > 2">
					{{ selectedItemNames.length - 2 }} more
				</span>
			</div>
			<span v-else>{{ selectedItemNames[0] || placeholder }}</span>
		</label>
		<ul tabindex="0" class="relative dropdown-content select-dropdown">
			<li class="sticky top-0 bg-white">
				<input v-model="filter" :class="filterClass" class="filter-input" placeholder="Search" />
			</li>
			<li class="select-option" v-for="(op, idx) in filterOptions" :key="idx">
				<div v-if="multiple" class="flex gap-2">
					<input
						:id="`check-${idx}`"
						@input="isChecked(op, $event)"
						type="checkbox"
						:checked="isCheckboxSelected(op)"
					/>
					<label class="cursor-pointer w-full" :for="`check-${idx}`">{{ label(op) }}</label>
				</div>
				<span class="w-full block" @click="handleClick(op)" v-else>{{ label(op) }}</span>
			</li>
			<li v-if="filterOptions.length == 0" class="text-center py-2 text-sm">No matching options</li>
		</ul>
	</div>
</template>

<style scoped>
/* Dropdown container */
.dropdown {
	position: relative;
	width: 100%;
}

/* .dropdown {
	border: 1px solid #e5e7eb;
	border-radius: 0.35rem;
} */

.dropdown:focus-within .dropdown-content {
	display: block;
}

.dropdown-bottom {
	display: inline-block;
}

.label {
	padding: 0 0.5rem;
	width: auto;
	min-width: 12rem;
	min-height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #e5e7eb;
	border-radius: 0.375rem;
	gap: 0.5rem;
	cursor: pointer;
}

.filter-input {
	width: 100%;
	outline: none;
	box-sizing: border-box;
	text-align: start !important;
	padding: 0.5rem 05rem;
	border: 1px solid #e5e7eb;
	border-radius: 0.35rem;
}

/* Dropdown label */
.w-auto {
	width: auto;
}
.flex {
	display: flex;
}
.items-center {
	align-items: center;
}
.focus-within\:border-primary-500:focus-within {
	border-color: #3b82f6;
}
.justify-center {
	justify-content: center;
}

/* Selected item labels */
.rounded-xl {
	border-radius: 0.75rem;
}
.bg-gray-200 {
	background-color: #e5e7eb;
}
.px-2 {
	padding-left: 0.5rem;
	padding-right: 0.5rem;
}
.gap-2 {
	gap: 0.5rem;
}
.py-1 {
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
}
.text-sm {
	font-size: 0.875rem;
}

/* Dropdown content */
.dropdown-content {
	position: absolute;
	display: none;
	z-index: 5;
	padding: 0.5rem;
	border-radius: 1rem;
	width: 14rem;
	max-height: 18rem;
	overflow-y: auto;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
	background-color: #ffffff;
}
/* Dropdown option */
.sticky {
	position: sticky;
}
.top-0 {
	top: 0;
}
.bg-white {
	background-color: #ffffff;
}
.select-option {
	padding-top: 0.2rem;
	padding: 0.2rem 0.8rem;
	padding-bottom: 0.2rem;
	margin: 0.2rem 0.2rem;
	cursor: pointer;
}
.select-option:hover {
	border-radius: 0.35rem;
	background-color: #eeeeee;
}

/* Option label and input */
.w-full {
	width: 100%;
}
.block {
	display: block;
}
.text-center {
	text-align: center;
}
.py-2 {
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
}

ul {
	list-style-type: none;
	padding: 0;
}
</style>
