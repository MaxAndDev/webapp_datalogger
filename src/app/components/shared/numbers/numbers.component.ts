import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {
  @Input() maximum: number;
  @Input() minimum: number;
  @Input() average: number;

  constructor() { }

  ngOnInit() {
  }

}
