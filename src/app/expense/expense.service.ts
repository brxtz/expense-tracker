import { Injectable } from '@angular/core';
import {Expense} from './expense.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses: Expense[] = [];
  private expenseUpDate = new Subject<Expense[]>()

  constructor() { }

  getExpenses(){

  }
  getExpenseUpdateListener(){
    return this.expenseUpDate.asObservable();
  }
  addExpense(description: string, amount: number){
    const expense: Expense = { id: null, description: description, amount: amount};
    this.expenses.push(expense);
    this.expenseUpDate.next([...this.expenses]);

  }
}
