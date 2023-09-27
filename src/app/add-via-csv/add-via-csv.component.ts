import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-via-csv',
  templateUrl: './add-via-csv.component.html',
  styleUrls: ['./add-via-csv.component.scss']
})
export class AddViaCSVComponent implements OnInit {

  selectedFile: File | null = null;
  
constructor(private service: EmployeeserviceService,private router:Router) { }

  ngOnInit(): void {
  }
   

  // uploadFile() {
  //   if (this.selectedFile) {
  //     const formData = new FormData();
  //     formData.append('file', this.selectedFile);

  //     this.http.post('http://localhost:9090/bulk/upload', formData).subscribe(
  //       (response) => {
  //         console.log('File uploaded successfully:', response);
  //       },
  //       (error) => {
  //         console.error('Error uploading file:', error);
  //       }
  //     );
  //   } else {
  //     console.error('No file selected.');
  //   }
  // }

  uploadCSV(){
    if (this.selectedFile) {
      console.log(this.selectedFile)
      const formData = new FormData();
      formData.append('csvFile', this.selectedFile);
  
      this.service.uploadCSVFile(this.selectedFile)
        .subscribe((response) => {
          this.router.navigate(['/customer']);
          console.log(response);
          
          
        });
    } else {
      //this.toaster.error("No file selected");
      console.log("Error");
    }
  }

  onFileSelected(event:any){
    event.target.files[0];
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile);


  }
}

  

 
