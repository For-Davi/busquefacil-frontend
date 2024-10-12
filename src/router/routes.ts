import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/dashboard',
    // meta: { requiresAuth: true },
    children: [
      {
        path: '',
        redirect: { name: 'dashboard-client' }, // Fazer condição para renderizar pára client ou business
      },
      {
        path: 'client',
        name: 'dashboard-client',
        component: () => import('../layouts/ClientLayout.vue'),
        // meta: { requiresAuth: true },
        children: [
          {
            path: '',
            // name: 'dashboard-client',
            component: () => import('../pages/ClientDashboard.vue'), // Componente para o cliente logado
          },
        ],
      },
      {
        path: 'business',
        component: () => import('../layouts/BusinessLayout.vue'),
        // meta: { requiresAuth: true },
        children: [
          {
            path: '',
            name: 'dashboard-business',
            component: () => import('../pages/BusinessDashboard.vue'), // Componente para a empresa logado
          },
        ],
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/error/ErrorNotFound.vue'),
  },
];

export default routes;
