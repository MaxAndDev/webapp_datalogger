import { Component, OnInit, Input } from '@angular/core';
import { DataService, LogDataArray } from 'src/app/services/data.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  @Input() parameter: string;

  constructor( private dataService: DataService) { }

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

  data: LogDataArray;

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataService.getData()
      .subscribe(data => {
        this.barChartLabels = [];
        this.barChartData = [{data: [], label: 'Temperatur'}];
        data.data.forEach(element => {
          const currentdate = new Date(element.timestamp);
          const currentvalue = element.temperature;
          this.barChartLabels.push(currentdate.toString());
          this.barChartData[0].data.push(currentvalue);
        });
        console.log(data);
        this.loadingIndicator = false;
      });
  }

}
