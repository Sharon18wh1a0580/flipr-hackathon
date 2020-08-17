import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';  
import { StockDataService } from '../stock-data.service';
import { HistoricalData } from '../data';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  



  ngOnInit(): void {
  
  }
  historicalData: Observable<HistoricalData[]> = this.stockDataService.historicalData;
  single: any[];
  multi: any[];

  view: any[] = [800, 360];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private stockDataService: StockDataService,private router: Router) {
    this.single = this.stockDataService.getStaticData();
  }

  public onSelect(event): void {

  }

  public onRefresh(): void {
    
  }
  register(graphform: any): void {
    
    console.log(graphform);
    this.router.navigate(['login']);
  }
  

}
