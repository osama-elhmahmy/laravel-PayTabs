<template>
    <div>
        <SelectCategory :categories="categories"/>
    </div>
    <div style="margin-left:1rem" v-for="(subItem, index) in subCategories" :key="index">
        <div :style="'margin-left:'+(index+.5)+'rem'"><SelectCategory :categories="subItem" :index="index+1"/></div>
    </div>

</template>

<script>
import useCategories from "../../Composables/categories";
import SelectCategory from './SelectCategory';
import { onMounted} from "vue";

export default {
    components: {
        SelectCategory
    },
    methods:{
        addNewSelect(id,index){
            this.getSubCategories(id,index)
        }
    },
    setup(){
        const { categories,subCategories, getCategories, getSubCategories } = useCategories();
        onMounted(getCategories)
        return {
            categories,
            subCategories,
            getSubCategories,
        }
    }
}
</script>
