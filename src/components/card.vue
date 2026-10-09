<script setup>
/* this fle mainly focues on setting up the design and behaviour for the
cards in homecards.vue as discussed in the comments in that file. 
We use defineProps to create a prop and set a default feature. 
The default can either be used as a fallback or the main design.
the <slot></slot> in the template basicaly behaves like an access point 
for whatever code will  be put in the bg prop using a v-bind directive. */
import { defineProps } from 'vue';

defineProps({
    bg: {
        type: String,
        default: 'bg-gray-100'
    },
});
</script>

<template>
    <div v-bind:class="`${bg} p-6 rounded-lg shadow-md`" >
        <slot></slot>
    </div>
</template>