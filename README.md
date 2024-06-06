# Vue Select

Vue Select is a versatile dropdown component built for Vue.js applications. It offers a pre-built template for standard filterable select dropdowns, saving you development time. Key features include:

- Filtering: Easily search and filter through a list of options using a search bar.
- Multiple Selection: Allow users to pick multiple options from the dropdown.
- Customization: Tailor the dropdown's appearance and behavior to perfectly match your application's design and functionality.
- Accessibility: Vue Select prioritizes accessibility, ensuring all users can interact with the dropdown seamlessly.
- Lightweight: Despite its rich features, Vue Select maintains a small footprint, keeping your application performant.

## Screenshots

![App Screenshot](https://i.postimg.cc/WpDfRhw8/Screenshot-2024-05-28-at-1-58-09-PM.png)

![App Screenshot](https://i.postimg.cc/SKTV3hXH/Screen-Recording2024-05-28at1-55-11-PM-ezgif-com-video-to-gif-converter.gif)

## Installation

Install Vue Select with npm

```bash
  npm i @hbilal_9/vue-select
```

## Browser with CDN

```html
<script src="https://unpkg.com/@hbilal_9/vue-select/dist/index.js"></script>
```
    
## Setup

Import vSelect in main.ts

```bash
  import vSelect from '@hbilal_9/vue-select'
  import '@hbilal_9/vue-select/dist/style.css'
  app.use(vSelect)
```

## Nuxt Setup
Create a plugin named vue-select.ts in plugins folder
```bash
plugins/vue-select.ts
```
Add the following code in vue-select.ts
```bash
  import vSelect from "@hbilal_9/vue-select";
  import "@hbilal_9/vue-select/dist/style.css";
  export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(vSelect);
  });

```

##  Usage
### with array of objects
```bash
<script setup lang="ts">
  import { ref } from 'vue';
  const data = ref("")

  const options = ref([
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
])

</script>

<template>
  <v-select
	  v-model="data"
	  :options="options"
	  :reduce="(opt: any) => opt.id"
	  :label="(opt: any) => opt.name"
	  placeholder="choose user"
	  :multiple="true"
  />
</template>

```

### with array of strings
```bash
<script setup lang="ts">
  import { ref } from 'vue';
  const data = ref("")

  const options = ref(['us', 'uk', 'pk', 'in', 'fr'])

</script>

<template>
  <v-select
	v-model="data"
	:options="options"
	:reduce="(name: any) => name"
	:label="(name: any) => name"
    placeholder="choose country"
  />
</template>

```

## Emits
you can also pass change event
```
  <v-select @change="getData"></v-select>
```
in script

```
function getData(e){
    console.log(e)
}
```

## Props

| Prop          | Description                                                                                       | Type             | Default |
| ------------- | ------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| placeholder      | Select Placeholder                                | String | Choose option      |
| options     | array of strings or objects                                                        | Array           | [] |
| label     | callback method that return label                                                        | method           | () => {} |
| reduce     |callback method that data you wanna receive in that v-model                                                  | method           | () => {} |
| filter-class     |you can change filter input style, you can add any css property with !important                                                 | string           | default style |
| class     |you can also modify default style  but make sure add !important with each property                                             | string           | default style |

 
 ## License
 [MIT License](LICENSE)

## Support Me
support me to publish more packages like this for free.

[![Coffee](https://img.shields.io/badge/Coffee-Buy%20me%20a%20coffee-yellow)](https://www.buymeacoffee.com/hbilal)