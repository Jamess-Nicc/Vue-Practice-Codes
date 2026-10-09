<script setup>
import navbar from './components/navbar.vue';
import hero from "./components/hero.vue";
import homecards from './components/homecards.vue';
import joblistings  from "./components/joblistings.vue"
</script>

<template>
    <navbar />
    <hero />
    <homecards />
    <joblistings :limit="3" :showButton="true"/>
</template>