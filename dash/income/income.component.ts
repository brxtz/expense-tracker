import { Component, Input } from "@angular/core";


import {DashService} from "../dash.services";
import {Income} from '../dash.model';

@Component({
    selector: "app-dash-income",
    templateUrl: "./income.component.html",
    styleUrls: ["./income.component.css"]
})

export class IncomeComponent{
    @Input() income: Income[] = [];
    
}