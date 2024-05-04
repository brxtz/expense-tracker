import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideAuth0({
      domain: 'dev-4ujk1edumgkhj4jj.us.auth0.com',
      clientId: 'lk8UTMzbYuwUsqGcUxhxn7NzFiP2b95k',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }), provideAnimationsAsync(),
  ]
});
