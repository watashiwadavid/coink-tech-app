import { Provider } from '@angular/core';
import {
  COINK_API_CONFIG,
  CoinkApiConfig as CoinkApiConfig,
} from './api.config';

export const provideApi = (apiUrl: string): Provider => {
  return {
    provide: COINK_API_CONFIG,
    useValue: {
      apiUrl,
    } as CoinkApiConfig,
  };
};
