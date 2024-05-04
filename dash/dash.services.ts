import {Injectable} from '@angular/core'
import {Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";

import {Income, Expense} from './dash.model';

@Injectable({providedIn: 'root'})
export class DashService {
    private income: Income[] = []
    private expenses: Expense[] = [];
    private incomeUpDate = new Subject<Income[]>()
    private expenseUpDate = new Subject<Expense[]>()

    constructor(private http: HttpClient){}

    addIncome(title: string, total: number){
        const newInc: Income ={title: title, total: total};
        this.income.push(newInc);
        this.incomeUpDate.next([...this.income]);
    }

    addExpense(title: string, total: number){
        const expense: Expense ={title: title, total: total};
        this.expenses.push(expense);
        this.expenseUpDate.next([...this.expenses]);
    }
}