<script setup>
import navbar from './components/navbar.vue';
import { RouterView } from 'vue-router'

/*Here in app.vue, we import RouterView from vue-router which is sort 
of like an outlet. It allows us to, well, VIEW the ROUTER we setup in main.js that is connected to our router/index.js
The template then uses RouterView to output that in our website. 
Key note that in the initial vue setup, if you chose yes to setup routers, all of this would be done 
automatically. */
</script>

<template>
    <navbar />
    <RouterView />
</template>
