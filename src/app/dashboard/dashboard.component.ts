
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // data: any; // Store your data here

  constructor(private router:Router) { }

  ngOnInit(): void {
    // Make an HTTP request to fetch data
    // this.http.get('https://api.example.com/data').subscribe((response) => {
    //   this.data = response;
    // });
  }
}
