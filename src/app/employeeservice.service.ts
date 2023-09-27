import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})

export class EmployeeserviceService {
 
  constructor(private employeeHttp : HttpClient) { }
baseUrl:string="http://localhost:9090/"



  Success(id:any): Observable<string>{
    return (this.employeeHttp.get<string>(`${this.baseUrl}pendingTosucess/${id}`));
  }

  loadPaidBills(): Observable<any> {
    return this.employeeHttp.get(`${this.baseUrl}getSavePaymentById`);
  }

 loadUnPaidBills(): Observable<any> {
    return this.employeeHttp.get(`${this.baseUrl}getAllPendingBills`);
  }
 
  login(id:number): Observable<any> {
    return this.employeeHttp.get(`${this.baseUrl}getAllTranctionById/${id}`);
  }

  employeeDetail(): Observable<any> {
    return this.employeeHttp.get(`${this.baseUrl}getAllBill`);
  }
  addCustomer(customerData:any): Observable<any> {
    return this.employeeHttp.post(`${this.baseUrl}insertCustomer`, customerData);
  }
  addBill(customerData:any): Observable<any> {
    return this.employeeHttp.post(`${this.baseUrl}newBill`, customerData);
  }
  invoice(id:number): Observable<any> {
    return this.employeeHttp.get(`${this.baseUrl}getPaymenyById/${id}`);
  }
  allCustomers(): Observable<any> {
    return this.employeeHttp.get(`${this.baseUrl}allCustomers`);
  }
uploadCSVFile(file : File) : Observable<any>{
  const formData = new FormData();
  formData.append('csvFile', file)

  return (this.employeeHttp.post(`${this.baseUrl}bulk/upload`,formData));
}
}



