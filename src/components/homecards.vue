<script setup>
/*This file creates the cards for both browse jobs and add job. This
file contains an import from card.vue which has the dynamic design. 
As you've noticed, there is a <card></card> syntax which uses card.vue's designs 
to be inherit the design and behaviour of the children inside the card syntaxes. */
import Card from "@/components/card.vue"
</script>

<template>
    <section class="py-4">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                <Card>
                    <h2 class="text-2xl font-bold">For Developers</h2>
                    <p class="mt-2 mb-4">
                        Browse Vue jobs for you and start your career today
                    </p>
                    <a
                    href="https://ph.jobstreet.com/"
                    target="_blank"
                    rel="noopener norefferer"
                    class="inline-block bg-black text-white rounded-lg px-4
                    py-2 hover:bg-gray-700">
                    Browse Jobs
                    </a>
                </Card>
                <Card bg="bg-green-100">
                    <h2 class="text-2xl font-bold">For Employers</h2>
                    <p class="mt-2 mb-4">
                        List your job to find the perfect developer for the role
                    </p> 
                    <a
                    href="https://ph.jobstreet.com/"
                    target="_blank"
                    rel="noopener norefferer"
                    class="inline-block bg-green-500 text-white rounded-lg
                    px-4 py-2 hover:bg-green-600">
                    Add Job
                    </a>
                </Card>
            </div>
        </div>
    </section>
</template>