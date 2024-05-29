import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@coink-app/ui/views').then((p) => p.HomePageComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('@coink-app/ui/views').then((p) => p.SignUpPageComponent),
  },
];
