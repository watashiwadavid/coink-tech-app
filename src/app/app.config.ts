import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideApi } from '@coink-app/data';
import { environment } from '../environments/environment';
import { provideCoinkUi } from '@coink-app/ui';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    provideApi(environment.apiUrl),
    provideCoinkUi(),
  ],
};
