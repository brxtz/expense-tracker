import { NgModule, Component, EventEmitter, Output, NO_ERRORS_SCHEMA} from "@angular/core";
import { NgForm } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDivider } from '@angular/material/divider'
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { BodyTwoComponent } from './expense/body-two/body-two.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserProfileComponent } from './profile/profile.component';
import { IncomeComponent } from './dash/income/income.component';
import { ExpenseComponent } from './dash/expenses/expenses.component';
import { ActionsComponent } from './dash/actions/actions.component';


@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyTwoComponent,
    IncomeComponent,
    ExpenseComponent,
    ActionsComponent,
    SignInComponent,
    UserProfileComponent,
    Component,
  ],
  imports: [
    NgForm,
    EventEmitter,
    Output,
    RouterModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatDivider,
    MatListModule,
    MatCardModule,
    BrowserAnimationsModule,

  ],
})
export class AppModule { }
