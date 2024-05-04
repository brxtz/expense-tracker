import { Routes } from '@angular/router';
import { BodyTwoComponent } from './expense/body-two/body-two.component';
import { AuthGuard } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './profile/profile.component';
import {SignInComponent} from './sign-in/sign-in.component';
import { authGuardFn } from '@auth0/auth0-angular';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signIn',
    pathMatch: 'full',
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: '/forms',
    component: BodyTwoComponent
  },
  {
    path: 'dashboard',
    component: AppComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [authGuardFn],
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
