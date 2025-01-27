// import { createApp } from 'vue'
// import './style.css'

// import Vue from 'vue';
// import App from './App.vue'
// import router from './router/index';

// Vue.config.productionTip = false;

// new Vue({
//     router,
//     render: h => h(App),})
// createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // Assurez-vous que le chemin est correct

const app = createApp(App);
app.use(router);
app.mount('#app');