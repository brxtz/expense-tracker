import { Injectable } from '@angular/core';
import {Expense} from './expense.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses: Expense[] = [];
  private expenseUpDate = new Subject<Expense[]>()

  constructor(private http: HttpClient) { }

  getExpenses(){
    this.http.get<{
      message: string, expenses:
      Expense[]
    }>('http://localhost:3000/api/posts').
      subscribe((expenseData: { expenses: Expense[]; }) => {
        this.expenses = expenseData.expenses;
        this.expenseUpDate.next([...this.expenses]);
      });
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
