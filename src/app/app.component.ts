import { Component, Inject, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyTwoComponent } from "./expense/body-two/body-two.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { IncomeComponent } from './dash/income/income.component';
import { ExpenseComponent } from './dash/expenses/expenses.component';
import { ActionsComponent } from './dash/actions/actions.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      BodyTwoComponent,
      HeaderComponent,
      FooterComponent,
      IncomeComponent,
      ExpenseComponent,
      ActionsComponent,
      RouterOutlet,
    ]
})

export class AppComponent implements OnInit{
  title = 'expense-tracker';

  isAuthenticated: boolean;

  constructor(@Inject(DOCUMENT) private document: Document,
              private authService: AuthService) {
    this.isAuthenticated = false;
  }

  public ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((success: boolean) => {
      this.isAuthenticated = success;
    });
  }

  handleLogout(): void {
    this.authService.logout({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  }
}
