import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ShowService} from '../show.service';

@Component({
  selector: 'app-nsebse',
  templateUrl: './nsebse.component.html',
  styleUrls: ['./nsebse.component.css']
})
export class NsebseComponent implements OnInit {

  constructor(private service:ShowService) { }
  router: any
  todayStock:any

  ngOnInit(): void {
    this.service.NSE().subscribe((result:any)=>{
      this.todayStock = result;
      console.log(result)}); 
  }
  //register(showform: any): void {
    
   // console.log(showform);
   // this.router.navigate(['header']);
  //}

}
