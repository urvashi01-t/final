import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bills',
  templateUrl: './add-bills.component.html',
  styleUrls: ['./add-bills.component.scss']
})
export class AddBillsComponent implements OnInit {

   billForm: FormGroup;

    constructor(private customerService: EmployeeserviceService,private fb: FormBuilder) { 
       this.billForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      dueDate: ['', Validators.required],
      consumedUnit: [0, Validators.required],
      amount: [0, Validators.required],
      status: ['', Validators.required],
      month: ['', Validators.required],
      totalamount: [0, Validators.required],
      customerId: this.fb.group({ //mapping
        customerId: [0, Validators.required]
      })
    });
  }
    
  ngOnInit(): void {
  }

  submitForm() {
    if (this.billForm.valid) {
      const billData = this.billForm.value;
      this.customerService.addBill(billData).subscribe(
        (response) => {
          console.log('Bill added successfully:', response);
          // Handle success response
        },
        (error) => {
          console.error('Error adding bill:', error);
          // Handle error
        }
      );
    } else {
      console.error('Form is invalid. Please fill in all required fields.');
    }
  }
}
