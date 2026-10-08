<script setup>
import { ref, onMounted } from 'vue';

/*This script tag contains the component's JavaScript logic.
within it, we use the data option to define reactive properties.
we create a data function inside export default to return a name.
It is worth to point out that we are using a short form Composition API 
for flexibility*/ 

/*in the codes below, we use "ref" to create reactive references. These reactive references
are then used in the template for the output. */

    /*the data below shows the name of the user in the script. */
    const name = ref('James Nicdao');
    /*The data below shows the current status of the user in the script. */
    const status = ref('active');
    /*The data below shows the tasks for the user in an array. */
    const tasks = ref(['Task 1', 'Task 2', 'Task 3']);
    const newTask = ref('');

    /*we use an arrow function to create the toggleStatus function which has the if conditions
    inside the curly braces. And also, we are using status.value here to make the options reactive.*/

    const toggleStatus = () => {
       if (status.value === 'active') {
          status.value = 'pending';
        } else if (status.value === 'pending') {
          status.value = 'inactive';
        } else {
          status.value = 'active'; 
        }
      };

      const addTask = () => {
        if (newTask.value.trim() !== '') {
          tasks.value.push(newTask.value);
          newTask.value = '';

        }
      };

      const deleteTask = (index) => {
        tasks.value.splice(index, 1);
      };

      onMounted(async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos');
          const data = await response.json();
          tasks.value = data.map((task) => task.title);
        } catch (error) {
          console.log('Error fetching tasks:', error);
        }
      });
</script>

<template>

  <!--The template tag contains the component's HTML structure.
  Then, we use the {{}} called interpolation to call the name property 
  from the script to output the reactive value.-->

  <h1>Welcome, {{ name }}!</h1><br>

  <!--The v-if directive is used to conditionally render elements based on the value of the status property.
  Looking at the code below, it states the current user's status. 
  As you can see, we are using directives the "v" prefix with status property in the script,
  and using a strict equality check to determine the user's status.-->

  <p v-if="status === 'active'">User is logged in.</p>
  <p v-else-if="status === 'inactive'">User is not logged in.</p>
  <p v-else>User status is unknown.</p><br>

  <form @submit.prevent="addTask">
    <label for="newTask">Add a new task:</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" placeholder="Enter a new task" required>
    <button type="submit">Add Task</button>
  </form>

  <!--The v-for directive is used to render a list of items based on the tasks property.
  in the list element, we use a v-for directive to iterate over the tasks array.-->

  <br><h3>Tasks:</h3><br>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }} 
      </span>
      <button @click="deleteTask(index)">x</button>
    </li><br>
  </ul><br>

  <!--The v-on directive is used to listen for the click event on the button element.
  In this particular code, we use the v-on directive to call the toggleStatus function when the button is clicked.-->

  <button v-on:click="toggleStatus">Change Status</button>
</template>

