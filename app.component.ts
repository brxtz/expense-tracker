import { Component } from '@angular/core';

import { Income, Expense } from "./dash/dash.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'expense-tracker';
  storedIncome: Income[] = [];
  storedExpenses: Expense[] = [];

  onIncomeAdded(income: Income){
    this.storedIncome.push(income);
  }

  onExpenseAdded(expense: Expense){
    this.storedExpenses.push(expense);
  }
}
