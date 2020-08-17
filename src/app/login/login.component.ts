import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GoService} from '../go.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  
  user:any;
  customer:any;
  
  constructor(private router: Router, private customerservice: GoService) {
    this.user = {email: '', Password: ''};
  }

  ngOnInit(): void {
  }
  loginSubmit(loginForm: any): void {
    
    console.log(loginForm);
    if (loginForm.email === 'smiley' && loginForm.password === 'smiley') {
      console.log('Inside login submit method...');
      this.customerservice.setUserLoggedIn();
      this.router.navigate(['graph']);
      
    
  }
  else{
    console.log(loginForm);
    this.customerservice.loginCustomer(loginForm).subscribe((result:any) => {if(result!=null){
      this.customerservice.setUserLoggedIn();
      this.router.navigate(['graph']);
      
    }
    else{
      alert("wrong credentials");
      this.router.navigate(['register']);
    }
  
  });
  console.log(this.customer);
 
}
  }

}
