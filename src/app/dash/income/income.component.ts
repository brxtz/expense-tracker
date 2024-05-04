import { Component, Input } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDivider } from '@angular/material/divider'
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import {DashService} from "../dash.services";
import {Income} from '../dash.model';

@Component({
    standalone: true,
    selector: "app-dash-income",
    templateUrl: "./income.component.html",
    styleUrls: ["./income.component.css"]
})

export class IncomeComponent{
    @Input() income: Income[] = [];

}
