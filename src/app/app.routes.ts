import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BodyTwoComponent } from './expense/body-two/body-two.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDivider } from '@angular/material/divider'
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'forms',
    component: BodyTwoComponent
  },
  {
    path: 'dashboard',
    component: AppComponent
  },
];

@NgModule({
  imports: [
    MatToolbarModule,
    MatDivider,
    MatListModule,
    MatCardModule,
  ]
})
export class MaterialModule {}
