import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  userData!:any;

  constructor(private http: HttpClient) {  }

  getAllUserData(){
    return this.http.get("https://angular-practice-test-default-rtdb.firebaseio.com/Users.json")
      .pipe(map((res:any)=>{
        var users = []
        for (let key in res) {
          if (res.hasOwnProperty(key)){
            users.push({...res[key], "id": key})
          }
        }
        return users
      }))
  }

  postUserData(data:any){
    return this.http.post("https://angular-practice-test-default-rtdb.firebaseio.com/Users.json", data)
      .subscribe( (data) => {
        console.warn(data);
    })
  }

  deleteUserData(id:any){
    return this.http.delete("https://angular-practice-test-default-rtdb.firebaseio.com/Users/"+id+".json")
      .subscribe( (data) => {
        console.warn(data);
        window.location.reload()
    })
  }

  retriveUserData(id:any){
    return this.http.get("https://angular-practice-test-default-rtdb.firebaseio.com/Users/"+id+".json")
  }

  updateUserData(data:any, id:any){
    return this.http.put("https://angular-practice-test-default-rtdb.firebaseio.com/Users/"+id+".json", data)
      .subscribe( (data) => {
        console.log(data);
      })
  }

}
