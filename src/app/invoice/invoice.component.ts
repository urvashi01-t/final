import { Component, OnInit } from '@angular/core';
import { CustomerBill } from '../customer-bill';
import { Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

    unpaidBills!:CustomerBill[];
  SelectedBill:any=sessionStorage.getItem("billId");
  
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
  this.customerService.Success(this.SelectedBill).subscribe((resonse)=>{
      console.log(resonse);
  });
this.route.navigate(['dashboard']);  
}


  loadUnPaidBills() {
    console.log(this.SelectedBill);
    this.customerService.invoice(this.SelectedBill).subscribe((response) => {
      console.log(response); 
      this.unpaidBills=response;
      console.log(" mai yhi thaUnpaid mai");  
    });
  }
    

}
