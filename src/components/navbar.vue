<script setup>
import logo from "@/assets/logo_testing.png"
</script>

<template>
    <nav class=" w-full bg-gray-900 text-white p-4 flex items-center justify-between">
        <div class="flex items-center space-x-5">
            <img :src="logo" alt="Logo" class="h-8 w-8 mr-2" />
            <span class="font-bold text-lg">JobVuer</span>
        </div>
        <ul class="flex space-x-4 p-3">
            <li><a href="/" class="inline-block transform-transition duration-300 hover:scale-150 hover:bg-gray-800 font-bold">Home</a></li>
            <li><a href="/jobs" class="inline-block transform-transition duration-300 hover:scale-150 hover:bg-gray-800 font-bold">Jobs</a></li>
            <li><a href="/jobs/add" class="inline-block transform-transition duration-300 hover:scale-150 hover:bg-gray-800 font-bold">Add Jobs</a></li>
        </ul>
    </nav>
</template>