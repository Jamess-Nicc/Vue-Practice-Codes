import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },

        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        }
    ]
});

export default router;

/*This index.js file is under the router folder. The router folder is reponsible 
for holding in router files like index.js which creates routes for the website.
we imported createRouter and createWebHistory to use the modules provided, 
also imported HomeView since that is our homepage aka the "main page" where everything
is shown. we make a const variable called router where it takes in a createRouter
functionwith curly braces which sets up createWebHistory and our BASE URL.
below that is our routes array with object inside it with path being "/"
name being home, and HomeView as its component, basically indicating that "/" is our homeview.
lastly we export this file to use in main.js*/