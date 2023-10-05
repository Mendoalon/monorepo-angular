import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'app'
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '**',
    loadChildren: () => import('@ainter/not-fout').then(m => m.NotFoutModule)
  }

];
