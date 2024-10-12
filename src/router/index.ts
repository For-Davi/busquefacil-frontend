import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  return Router;
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = // verificar se o usuário está autenticado
//   const userType = // recuperar o tipo de usuário (cliente ou empresa)

//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!isAuthenticated) {
//       next('/login'); // Redireciona para login se não estiver autenticado
//     } else {
//       if (to.path === '/dashboard') {
//         // Redirecionar com base no tipo de usuário
//         if (userType === 'client') {
//           next({ name: 'dashboard-client' });
//         } else if (userType === 'business') {
//           next({ name: 'dashboard-business' });
//         }
//       } else {
//         next(); // Continua se não for a rota /dashboard
//       }
//     }
//   } else {
//     next(); // Continua se não precisar de autenticação
//   }
// });
