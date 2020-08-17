import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GoService} from '../go.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer: any;
  constructor(private service:GoService,private router: Router ) {
    this.customer = { custId:'', email: '', userName:'',password: ''};
  }

  ngOnInit() {
    
  }
  register(registerForm: any): void {
    this.service.registerCustomer(registerForm).subscribe((result: any) => { console.log(result); } );
    console.log(registerForm);
    this.router.navigate(['login']);
  }
}
