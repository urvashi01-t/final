
import { Component } from '@angular/core';

import { EmployeeserviceService } from '../employeeservice.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { CustomerBill } from '../customer-bill';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {




   paidBills!:CustomerBill[]; //for storing customer bill data//entity
  searchText: string = ''

  constructor(private httpservice:EmployeeserviceService,
              private router:Router) { }

  AddEmployee(){

              }
  ngOnInit(): void {
    this.GetAllData(); 
  }

  GetAllData(){
    this.httpservice.employeeDetail()
    .subscribe((resonse:any)=>{
      console.log(resonse)
      this.paidBills=resonse;
    });

  }
 


}
