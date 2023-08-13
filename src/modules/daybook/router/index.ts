import type { RouteRecordRaw } from 'vue-router';

const daybookRouter: RouteRecordRaw = {
  path: '/daybook',
  name: 'daybook',
  component: () => import('@/modules/daybook/layouts/DaybookLayout.vue'),
  children: []
} 

export default daybookRouter;