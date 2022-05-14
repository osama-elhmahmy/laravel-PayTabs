require('./bootstrap');

import {createApp, CreateApp} from 'vue';

import router from './router';

import CategoriesIndex from "./components/Categories/CategoriesIndex";

createApp({
    components: {CategoriesIndex}
}).use(router).mount("#app")
