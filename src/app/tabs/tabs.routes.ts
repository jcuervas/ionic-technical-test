import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../notification-list/notification-list.page').then((m) => m.NotificationListPage),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../create-notification/create-notification.page').then((m) => m.CreateNotificationPage),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
