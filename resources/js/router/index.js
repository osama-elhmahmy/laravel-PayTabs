import { createRouter, createWebHistory } from "vue-router";

import CategoriesIndex from "../components/Categories/CategoriesIndex";

const routes = [
    {
        path: "/category",
        name: "categories.index",
        component: CategoriesIndex
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
