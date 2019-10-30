import { Component, OnInit, Input } from '@angular/core';

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
