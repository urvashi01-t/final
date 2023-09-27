import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BillManagementComponent } from './bill-management/bill-management.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './header/header.component';
import { UnPaidComponent } from './un-paid/un-paid.component';
import { CustomerAllComponent } from './customer-all/customer-all.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddViaCSVComponent } from './add-via-csv/add-via-csv.component';
import { AddBillsComponent } from './add-bills/add-bills.component';
// import { InvoiceComponent } from './invoices/invoices.component';

@NgModule({
  declarations: [
    AppComponent,
    
  LoginComponent,
       BillManagementComponent,
       InvoiceComponent,
       SidebarComponent,
       DashboardComponent,
       PaymentComponent,
       HeaderComponent,
       UnPaidComponent,
       CustomerAllComponent,
       AddEmployeeComponent,
       AddViaCSVComponent,
       AddBillsComponent,
       InvoiceComponent,
       
  
  ],
  imports: [
    BrowserModule,
  FormsModule,
  RouterModule,
   AppRoutingModule,
   HttpClientModule,
   ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
