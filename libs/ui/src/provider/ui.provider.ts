import { EnvironmentProviders, Provider } from '@angular/core';
import { loadingInterceptor } from '../interceptor/loading.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const provideCoinkUi = (): Array<Provider | EnvironmentProviders> => [
  provideHttpClient(withInterceptors([loadingInterceptor])),
];
