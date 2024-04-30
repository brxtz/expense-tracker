import { Component } from '@angular/core';
import { Expense } from '../expense.model';
import { ExpenseService } from '../expense.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body-two',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './body-two.component.html',
  styleUrl: './body-two.component.css'
})
export class BodyTwoComponent {

  constructor(public expensesService: ExpenseService) {

  }
  onAddExpense(form: NgForm){
    if(form.invalid){
      return;
    }
    this.expensesService.addExpense(form.value.description, form.value.amount)

  }

}

