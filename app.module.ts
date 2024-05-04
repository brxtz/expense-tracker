import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BodyTwoComponent } from './expense/body-two/body-two.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { IncomeComponent } from './dash/income/income.component';
import { ExpenseComponent } from './dash/expenses/expenses.component';
import { ActionsComponent } from './dash/actions/actions.component';

@NgModule({
  declarations: [

  ],
  imports: [
    AppComponent,
    HeaderComponent,
    BodyTwoComponent,
    FooterComponent,
    RouterModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
})
export class AppModule { }
