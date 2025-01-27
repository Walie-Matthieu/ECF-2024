// import Vue from 'vue';
// import Router from 'vue-router';
// import Savane from '../components/Savane.vue'; // Assurez-vous que le chemin est correct

// Vue.use(Router);

// export default new Router({
//   routes: [
//     {
//       path: '/savane',
//       name: 'Savane',
//       component: Savane
//     },
//     // autres routes...
//   ]
// });

import { createRouter, createWebHistory } from 'vue-router';
import Savane from '../components/Savane.vue'; // Utilisez un chemin relatif
import PageEntree from '../components/PageEntree.vue'; // Ajoutez la route pour la page d'entrée

const routes = [
  {
    path: '/',
    name: 'PageEntree',
    component: PageEntree
  },
  {
    path: '/savane',
    name: 'Savane',
    component: Savane
  },
  // autres routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;