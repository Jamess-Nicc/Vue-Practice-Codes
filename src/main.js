import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App)
app.use(router);
app.mount('#app')

/*In the main.js in our src folder, this is where we import our App and the 
router, which was exporter earlier in router/index.js. This allows us to use the router and
connect it to our app which allows is to connect it to other files such as App.vue*/
