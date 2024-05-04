import { Component, Input, NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDivider } from '@angular/material/divider'
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import {DashService} from "../dash.services";
import {Expense} from '../dash.model';

NgModule({
  imports: [
    MatToolbarModule,
    MatDivider,
    MatListModule,
    MatCardModule,
  ]
})

@Component({
    standalone: true,
    selector: "app-dash-expenses",
    templateUrl: "./expenses.component.html",
    styleUrls: ["./expenses.component.css"]
})

export class ExpenseComponent{
    @Input() expenses: Expense[] = [];

}