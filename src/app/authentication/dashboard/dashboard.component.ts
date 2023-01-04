import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandleService } from 'src/app/shared/error-handle.service';
import { TokenService } from 'src/app/shared/token/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private http:TokenService, private route:Router, private error: ErrorHandleService){ 
    this.errors = this.error
   }

  allData!:any;
  errors!:any;

  ngOnInit(){
    this.http.getData().subscribe((data) => {
      this.allData = data
    })
  }

  logout(){
    localStorage.removeItem("token")
    this.route.navigate([''])
  }

}
