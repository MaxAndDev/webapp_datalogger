import { Component, OnInit } from '@angular/core';

import { NumbersComponent } from '../shared/numbers/numbers.component';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit {
  maximum = 100;
  minimum = 100;
  average = 100;

  constructor() { }

  ngOnInit() {
  }

}
