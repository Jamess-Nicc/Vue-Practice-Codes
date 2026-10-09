<script setup>
import JobListing from "./joblisting.vue"
import jobData from "@/jobs2.json";
import { ref } from 'vue';

const jobs = ref(jobData);
</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in jobs" :key="job.id" :job="job" />
            </div>
        </div>
    </section>
</template>