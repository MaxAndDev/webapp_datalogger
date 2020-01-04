import { Component, OnInit } from '@angular/core';

import { NumbersComponent } from '../shared/numbers/numbers.component';
import { DataService } from 'src/app/services/data.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit {

  max: any;
  min: any;
  avg: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    forkJoin(
      this.dataService.getNumbers('humidity', 'max'),
      this.dataService.getNumbers('humidity', 'min'),
      this.dataService.getNumbers('humidity', 'avg'),
    ).subscribe(([maxData, minData, avgData]) => {

      this.max = Math.floor(maxData.max_item[0].humidity * 100) / 100;
      this.min = Math.floor(minData.min_item[0].humidity * 100) / 100;
      this.avg = Math.floor(avgData.avg[0].avg * 100) / 100;

      console.log(this.max);
      console.log(this.min);
      console.log(this.avg);

    });
  }
}
