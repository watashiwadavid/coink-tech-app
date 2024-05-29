import { Route } from '@angular/router';
import { HomePageComponent } from './views/home/home-page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
];
