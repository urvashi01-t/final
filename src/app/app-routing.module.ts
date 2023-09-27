import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { UnPaid } from './un-paid';
import { UnPaidComponent } from './un-paid/un-paid.component';
import { CustomerComponent } from './customer/customer.component'; // Import the Customer component
import { CustomerAllComponent } from './customer-all/customer-all.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddViaCSVComponent } from './add-via-csv/add-via-csv.component';
import { AddBillsComponent } from './add-bills/add-bills.component';
import { BillManagementComponent } from './bill-management/bill-management.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path:'Payment',component:PaymentComponent},
  {path:'UnPaid',component:UnPaidComponent},
  { path: 'customer', component: CustomerAllComponent }, // Define a route for the Customer component
  {path:'addCustomer', component:AddEmployeeComponent},
  {path:'addViaCSV',component:AddViaCSVComponent},
  {path:'addBills',component:AddBillsComponent},
   { path: 'bill-management', component: BillManagementComponent },
{path:'invoice',component:InvoiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
