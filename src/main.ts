import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from '@coink-app/ui';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
