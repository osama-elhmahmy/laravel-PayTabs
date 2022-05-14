<template>
    <select @change="onChange($event, index)">
        <option value="">Please select category</option>
        <option v-for="(category, index) in categories" :key="index" :value="category.id">{{ category.title }}</option>
    </select>
</template>
<script>

import useCategories from "../../Composables/categories";
import {onMounted} from "vue";

export default {
    name: "SelectCategory",
    props: {
        categories:{default:[]},
        index: {default:0}
        },
    methods: {
        onChange(event,index) {
            this.$parent.addNewSelect(event.target.value, index)
        }
    }

}
</script>

<style scoped>

</style>
