import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

  max: any;
  min: any;
  avg: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    forkJoin(
      this.dataService.getNumbers('temperature', 'max'),
      this.dataService.getNumbers('temperature', 'min'),
      this.dataService.getNumbers('temperature', 'avg'),
    ).subscribe(([maxData, minData, avgData]) => {

      this.max = Math.floor(maxData.max_item[0].temperature * 100) / 100;
      this.min = Math.floor(minData.min_item[0].temperature * 100) / 100;
      this.avg = Math.floor(avgData.avg[0].avg * 100) / 100;

      console.log(this.max);
      console.log(this.min);
      console.log(this.avg);

    });
  }

}
