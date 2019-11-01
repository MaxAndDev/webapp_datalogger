import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  @Input() parameter: string;

  constructor() { }

  loadingIndicator = true;


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // inital fake data for building component
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: this.parameter}
  ];

  // provide basic data at beginning
  // change data after fetch to real data -> see onInit
  // diagram changes automatically

  ngOnInit() {
    console.log(this.parameter);
    setTimeout(() => {
      this.loadingIndicator = false;
      this.barChartLabels = ['2023', '2307', '2068', '2089', '2040', '5011', '7012'];
      this.barChartData = [
        {data: [43, 69, 77, 81, 56, 55, 10], label: 'Temperature'}
      ];
      console.log(this.barChartLabels);
    }, 2000);
  }

}
