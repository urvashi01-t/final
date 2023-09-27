import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';
import { CustomerBill } from '../customer-bill';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-all',
  templateUrl: './customer-all.component.html',
  styleUrls: ['./customer-all.component.scss']
})
export class CustomerAllComponent implements OnInit {

paidBills!:Customer[]
SelectedBill!:number;

  constructor(    private route: Router,
    private customerService : EmployeeserviceService
) { }

AddEmployee():void{
  console.log("yha par hu abhi");
this.route.navigate(['addCustomer']);

} 
ngOnInit(): void 
  {
      this.loadPaidBills();
}

loadPaidBills() {
  this.customerService.allCustomers().subscribe((response) => {
    console.log(response); 
    this.paidBills=response;  
  });
}
}

