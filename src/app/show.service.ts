import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient: HttpClient) { }
  NSE(){
    return this.httpClient.get('flipr/RESTAPI2018/webapi/myresource1/nse');
  }
}
