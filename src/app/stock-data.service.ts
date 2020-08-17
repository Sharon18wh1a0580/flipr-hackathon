import { Injectable } from '@angular/core';
import { HistoricalData } from './data';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  
  
    public historicalData: Subject<HistoricalData[]> = new Subject();
    constructor() { 
    }
    // return dummy data
    getStaticData() {
      return [{"name":"Ticker","series":[{"name":"jan 19","value":1000},{"name":"feb 19","value":2000},{"name":"mar 19","value":500},{"name":"apr 19","value":1000},{"name":"may 19","value":1000},{"name":"june 19","value":2000},{"name":"july 19","value":2000},{"name":"aug 19","value":2500}]}];
    }
}
