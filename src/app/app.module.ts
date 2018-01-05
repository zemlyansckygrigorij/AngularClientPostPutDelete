import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersComponent } from './customers/customers.component';
import { DataService } from './data.service';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

import {enableProdMode} from '@angular/core';
/*
* imports — the BrowserModule that this and every application needs to run in a browser.
declarations — the application's lone component, which is also ...
bootstrap — the root component that Angular creates and inserts into the index.html host web page.
providers - Modules are a great way to provide services for all of the module's components.*/
@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],

  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
