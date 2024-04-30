import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyTwoComponent } from "./expense/body-two/body-two.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      BodyTwoComponent,
      HeaderComponent,
      FooterComponent,
      RouterOutlet
    ]
})
export class AppComponent {
  title = 'expense-tracker';
}
