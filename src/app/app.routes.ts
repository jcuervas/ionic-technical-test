import { Routes } from '@angular/router';
import {Tab2Page} from "./tab2/tab2.page";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab2',
    component: Tab2Page // Directamente referencia al componente
  },
];
