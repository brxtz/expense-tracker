import { Component, EventEmitter, Output} from "@angular/core";
import { NgForm } from "@angular/forms";

import { Income, Expense } from "../dash.model"
import {DashService} from "../dash.services";

@Component({
    selector: "app-dash-actions",
    templateUrl: "./actions.component.html",
    styleUrls: ["./actions.component.css"]
})

export class ActionsComponent{
    constructor(public dashService: DashService){

    }

    binding = '';
    enteredITotal = "";
    enteredITitle = "";

    enteredETotal = "";
    enteredETitle = "";

    @Output() incomeCreated = new EventEmitter<Income>;


    @Output() expensesCreated = new EventEmitter<Expense>;

    onAddIncome(form: NgForm){
        const newInc: Income = {
            title: form.value.title,
            total:form.value.total
        };
        
        this.incomeCreated.emit(newInc);

        form.reset();
    }

    onAddExpense(form: NgForm){
        const expense: Expense = {
            title: form.value.title,
            total:form.value.total
        };
        
        this.expensesCreated.emit(expense);

        form.reset();
    }
}