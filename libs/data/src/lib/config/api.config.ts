import { InjectionToken } from '@angular/core';

export type CoinkApiConfig = {
  apiUrl: string;
};

export const COINK_API_CONFIG = new InjectionToken<CoinkApiConfig>(
  'COINK_API_CONFIG'
);
