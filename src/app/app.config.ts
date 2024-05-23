import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {NgxPermissionsModule} from "ngx-permissions";

export const appConfig: ApplicationConfig = {
  providers: [

    // Import providers from NgxPermissionsModule
    importProvidersFrom(NgxPermissionsModule.forRoot()),

    // Provide zone change detection with event coalescing
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Provide the router configuration
    provideRouter(routes),
  ]
};
