import { Component, Input, NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDivider } from '@angular/material/divider'
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import {DashService} from "../dash.services";
import {Expense} from '../dash.model';

@Component({
    standalone: true,
    selector: "app-dash-expenses",
    templateUrl: "./expenses.component.html",
    styleUrls: ["./expenses.component.css"],
    imports: [
      MatToolbarModule,
      MatDivider,
      MatListModule,
      MatCardModule,
      MatFormFieldModule
    ]
})

export class ExpenseComponent{
    @Input() expenses: Expense[] = [];

}
