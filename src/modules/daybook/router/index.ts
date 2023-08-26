import type { RouteRecordRaw } from 'vue-router';

const daybookRouter: RouteRecordRaw = {
  path: '/daybook',
  name: 'daybook',
  component: () => import('@/modules/daybook/layouts/DaybookLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import('@/modules/daybook/views/NoEntrySelected.vue')
    }
  ]
} 

export default daybookRouter;