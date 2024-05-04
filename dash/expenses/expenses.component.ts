import { Component, Input } from "@angular/core";


import {DashService} from "../dash.services";
import {Expense} from '../dash.model';

@Component({
    selector: "app-dash-expenses",
    templateUrl: "./expenses.component.html",
    styleUrls: ["./expenses.component.css"]
})

export class ExpenseComponent{
    @Input() expenses: Expense[] = [];
    
}