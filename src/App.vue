<script>

/*This script tag contains the component's JavaScript logic.
within it, we use the data option to define reactive properties.
we create a data function inside export default to return a name.*/ 

export default {
  data(){
    return {
      name: 'James Nicdao',
      /*The data below shows the current status of the user in the script. */
      status: 'active',
      /*The data below shows the tasks for the user in an array. */
      tasks: ['Task 1', 'Task 2', 'Task 3'],
    };
  },
};
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

  <!--The v-for directive is used to render a list of items based on the tasks property.
  in the list element, we use a v-for directive to iterate over the tasks array.-->
  <h3>Tasks:</h3><br>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
</template>

