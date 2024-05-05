import { Component, Inject, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyTwoComponent } from "./expense/body-two/body-two.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { IncomeComponent } from './dash/income/income.component';
import { ExpenseComponent } from './dash/expenses/expenses.component';
import { ActionsComponent } from './dash/actions/actions.component';
import { DashService } from './dash/dash.services';
import { Expense, Income } from './dash/dash.model';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      BodyTwoComponent,
      HeaderComponent,
      FooterComponent,
      IncomeComponent,
      ExpenseComponent,
      ActionsComponent,
      RouterOutlet,
    ]
})

export class AppComponent {
  // title = 'expense-tracker';
  storedIncome: Income[] = [];
  storedExpenses: Expense[] = [];

  onIncomeAdded(income: Income){
    this.storedIncome.push(income);
  }

  onExpenseAdded(expense: Expense){
    this.storedExpenses.push(expense);
  }
}
