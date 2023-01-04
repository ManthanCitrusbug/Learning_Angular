import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.post("https://backend-devops.azurewebsites.net/api/v1/login/", data)
  }

  getData(){
    return this.http.get("https://backend-devops.azurewebsites.net/api/v1/chartsofday/")
  }

}
