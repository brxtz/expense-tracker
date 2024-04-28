import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyTwoComponent } from "./expense/body-two/body-two.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [BodyTwoComponent]
})
export class AppComponent {
  title = 'expense-tracker';
}
