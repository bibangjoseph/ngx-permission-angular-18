import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {NgxPermissionsModule} from "ngx-permissions";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(NgxPermissionsModule.forRoot()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ]
};
