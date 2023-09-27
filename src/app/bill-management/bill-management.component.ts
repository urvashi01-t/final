import { Component, OnInit } from '@angular/core';
import { CustomerBill } from '../customer-bill';
import { Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-bill-management',
  templateUrl: './bill-management.component.html',
  styleUrls: ['./bill-management.component.scss']
})
export class BillManagementComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
 unpaidBills!:CustomerBill[];
  SelectedBill!:number;
  
    constructor(    private route: Router,
      private customerService : EmployeeserviceService
  ) { }
  
    ngOnInit(): void 
    {
        this.loadUnPaidBills();
  }
  
  navigateToChoicePayment(billId:number):void{
  this.SelectedBill=billId;
      sessionStorage.setItem("billId",""+this.SelectedBill);
this.route.navigate(['invoice']);  
}


  loadUnPaidBills() {
    this.customerService.employeeDetail().subscribe((response) => {
      console.log(response); 
      this.unpaidBills=response;
      console.log(" mai yhi thaUnpaid mai");  
    });
  }
    

}
