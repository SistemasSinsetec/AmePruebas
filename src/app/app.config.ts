import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbIconModule,
  NbButtonModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      NbThemeModule.forRoot({ name: 'cosmic' }),
      NbLayoutModule,
      NbSidebarModule.forRoot(),
      NbMenuModule.forRoot(),
      NbIconModule,
      NbButtonModule,
      NbEvaIconsModule
    ),
  ],
};
