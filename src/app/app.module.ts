import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BodyTwoComponent } from './expense/body-two/body-two.component';

@NgModule({
  declarations: [

  ],
  imports: [
    AppComponent,
    BodyTwoComponent,
    CommonModule,
    BrowserModule,
    FormsModule
  ],
})
export class AppModule { }
