import { Component, OnInit } from '@angular/core'
import { Customer } from '../customer'
import { HttpClient } from '@angular/common/http';
import { EmployeeserviceService } from '../employeeservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  

   constructor(private customerService: EmployeeserviceService, private router : Router) { }

customer: any = {
    name: '',
    lastName: '',
    phoneNumber:0,
    address: ''
}
  ngOnInit(): void {

  }

submitForm(customerForm: NgForm): void {
      this.customerService.addCustomer(this.customer).subscribe(
        response => {
          console.log('Data sent successfully:', response);
          // You can reset the form here if needed
          this.router.navigate(['./customer']);
          // customerForm.reset();
          },
        error => {
          console.error('Error sending data:', error);
        }
      );  
  }
}





