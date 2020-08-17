import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GoService {

 
  private isUserLogged: any;
  user:any;
  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
   }
   setUserLoggedIn(): void { // login success
    this.isUserLogged = true;
   }
   setUserLoggedOut(): void { // logout success
    this.isUserLogged = false;
   }
   getUserLogged(): any { // call this in AuthGuard
     return this.isUserLogged;
   }
   registerCustomer(user: any) {
    return this.httpClient.post('flipr/webapi/myresource1/regEmp',  user);
   }
   loginCustomer(login:any) {

  
    return this.httpClient.get('flipr/webapi/myresource1/loginUser/'+login.email+':'+login.Password,login);
   }
   
}
