
//mine
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  id!: number;
  otp: string = '';
  // otp: string = '';
  generatedOTP: string = '';
 constructor(private router: Router,private employeeeService : EmployeeserviceService) {}
  // Generate a random OTP and display it in the console
  generateOTP() {
    const length = 6; // Length of the OTP
    const charset = "0123456789"; // Characters to include in the OTP
    let otp = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      otp += charset.charAt(randomIndex);
    }
this.generatedOTP = otp;
    console.log('Generated OTP:', otp); // Display OTP in the console
  }

  login() {
    return this.employeeeService.login(this.id).subscribe((response)=>{
       if (response!=null && this.generatedOTP === this.otp) {
      // Successful login
      this.router.navigate(['/dashboard']);
    } else {
      // Invalid login, show an error message
      alert('Invalid credentials. Please try again.');
    }
    })
    
    //for now
          // this.router.navigate(['/dashboard']);
    
    console.log('ID:', this.id);
    console.log('OTP:', this.otp);
  }
}
