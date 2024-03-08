import { ApplicationConfig, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  Wallet2,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideStore(),
    provideHttpClient(withFetch()),
    {
      provide: LUCIDE_ICONS,
      useValue: LucideAngularModule.pick({ Wallet2 }),
    },
  ],
};
