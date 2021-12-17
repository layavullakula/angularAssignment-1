import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { successApp } from './Success/success.component'; 
import { failureApp } from './Failure/failure.component';

@NgModule({
  declarations: [
    AppComponent,
    successApp,
    failureApp
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
