<script setup>
/* This file  contains a script whereit imports defineProps for 
using the jobs in jobs.json, ref for reactive codes in this file, and computed
to use methods like substring. */
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
    job: Object
});

const showFullDescription = ref(false) //create a function called showFullDescripton with value of ref(false), use ref for reactivity.
const toggleFullDescription = () => {
    showFullDescription.value = !showFullDescription.value;
} /* create a function called toggleFullDescription. We use an arrow function where it takes in showFullDescription.value (.value because we use ref)
 and it will only active when it equates to NOT showFullDescription.value (which is the value in the truncatedDescription function, we just counteract it.) */

const truncatedDescription = computed(() => {
    let description = props.job.description;
    if (!showFullDescription.value) {
        description = description.substring(0, 90) + '...';
    }
    return description;  /*create a function called truncatedDescription where we use the computed module 
    with an arrow function. Inside the function, we use a let statement for mutability. The let description takes 
    props and gets the job description using dot notation and under it, an if statement where if NOT showFullDescription.value (use dot because ref)
    then that that should output description where description has a method of substring where it has a word limit of 0-90 with 
    a concatenation of "..." so that it shows an elipses right after the 90th character. Then we return the value of description after the if. */
});
</script>

<template>
    <div class="bg-white rounded-xl shadow-md relative">
        <div class="p-4">
            <div class="mb-6">
                <div class="text-gray-600 my-2">{{ job.type }}</div>
                <h3 class="text-xl font-bold">{{ job.title }}</h3>
            </div>

            <div class="mb-5">
                <div>
                    {{ truncatedDescription }}
                </div>
                <button @click="toggleFullDescription" class="text-green-500 hover:text-green-600
                mb-5">
                    {{ showFullDescription ? 'Less' : 'More' }}
                </button>
            </div>

            <h3 class="text-green-500 mb-2">{{ job.salary }}</h3>

            <div class="border border-gray-100 mb-5"></div>

            <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                    <i class="fa-solid fa-location-dot text-lg"></i>
                    {{ job.location }}
                </div>
                <a
                :href="'/job/' + job.id" 
                target="_blank"
                rel="noopener norefferer"
                class="h-[36px] bg-green-500 hover:bg-green-600 
                text-white px-4 py-2 rounded-lg text-center text-sm">
                Read More
                </a>
            </div>
        </div>
    </div>
</template>