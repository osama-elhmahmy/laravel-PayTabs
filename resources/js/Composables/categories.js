import { ref } from "vue";
import axios from "axios";

export default function useCategories(){

    const categories = ref([]);
    const subCategories = ref([]);

    const getCategories = async () => {
        let response = await axios.get('/api/categories');
        categories.value = response.data.data
    }

    const getSubCategories = async (id,index) => {
        console.log(id,index,subCategories.value.length)
        let response = await axios.get('/api/categories/'+ id);
        if(id){

            if(response.data.data.length) {
                console.log(index,subCategories.value.length)
                if(subCategories.value.length === 0){
                    subCategories.value[0] = response.data.data
                    if (subCategories.value.length > 1){
                        resetCategoryFromIndex(1)
                    }
                }else{
                    let length = subCategories.value.length;
                    if(length > index){
                        subCategories.value.splice(index)
                    }
                    subCategories.value[Object.keys(subCategories.value).length] = response.data.data
                }
            }
        }else{
            console.log(555);
            resetCategoryFromIndex(index)
        }

    }

    const resetCategoryFromIndex = (index)=>{
        for (var j = index; j < subCategories.value.length; j++){
            subCategories.value.splice(index)
        }

    }

    return {
        categories,
        subCategories,
        getCategories,
        getSubCategories
    }
}
