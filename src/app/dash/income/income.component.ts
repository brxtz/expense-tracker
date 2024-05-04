import { Component, Input } from "@angular/core";
import { NgIf, NgFor } from "@angular/common";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDivider } from '@angular/material/divider'
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import {DashService} from "../dash.services";
import {Income} from '../dash.model';

@Component({
    standalone: true,
    selector: "app-dash-income",
    templateUrl: "./income.component.html",
    styleUrls: ["./income.component.css"],
    imports: [
      MatToolbarModule,
      MatDivider,
      MatListModule,
      MatCardModule,
      MatFormFieldModule,
      NgIf,
      NgFor
    ]
})

export class IncomeComponent{
    @Input() income: Income[] = [];

}
