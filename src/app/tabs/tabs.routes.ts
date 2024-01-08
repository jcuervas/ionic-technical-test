import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'notifications-list',
        loadComponent: () =>
          import('../notification-list/notification-list.page').then((m) => m.NotificationListPage),
      },
      {
        path: 'create-notification',
        loadComponent: () =>
          import('../create-notification/create-notification.page').then((m) => m.CreateNotificationPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: '',
        redirectTo: '/notifications-list',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/notifications-list',
    pathMatch: 'full',
  },
];
