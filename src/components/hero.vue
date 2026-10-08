<script setup>
/* This script contains the hero section. it uses a section to create
the background of the hero section. Then, usestwo divs, one for setting 
up the flex behaviour and the other div focusing on centering the text.
Styling uses TailWindCSS, please view official tailwindcss documentation
for reference. */
import { defineProps } from 'vue';

defineProps({
    title: {
        type: String,
        default: 'Become a Vue Dev'
    },
    subtitle: {
        type: String,
        default: 'Find the Vue job that fits your skills and needs'
    }
});

</script>

<template>
    <section class="bg-green-700 py-20 mb-4">
        <div 
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex
        flex-col items-center">
            <div class="text-center">
                <h1 class="text-4xl font-extrabold text-white
                sm:text-5xl md:text-6xl">
                    {{ title }}
                </h1>
                <p class="my-4 text-xl text-white">
                    {{ subtitle }}
                </p>
            </div>
        </div>
    </section>
</template>