import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airpressure',
  templateUrl: './airpressure.component.html',
  styleUrls: ['./airpressure.component.scss']
})
export class AirpressureComponent implements OnInit {

  max: any;
  min: any;
  avg: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    forkJoin(
      this.dataService.getNumbers('airpressure', 'max'),
      this.dataService.getNumbers('airpressure', 'min'),
      this.dataService.getNumbers('airpressure', 'avg'),
    ).subscribe(([maxData, minData, avgData]) => {

      this.max = Math.floor(maxData.max_item[0].airpressure  * 100) / 100;
      this.min = Math.floor(minData.min_item[0].airpressure * 100) / 100;
      this.avg = Math.floor(avgData.avg[0].avg * 100) / 100;

      console.log(this.max);
      console.log(this.min);
      console.log(this.avg);

    });
  }

}
