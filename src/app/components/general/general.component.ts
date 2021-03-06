import { Component, OnInit } from '@angular/core';
import { DataService, LogDataArray } from 'src/app/services/data.service';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  constructor(
    private dataService: DataService
  ) { }

  data: LogDataArray;
  loadingIndicator = true;
  displayedColumns: string[] = ['station_id', 'airpressure', 'humidity', 'temperature', 'timestamp'];

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataService.getData()
      .subscribe(data => {
        this.data = data;
        this.loadingIndicator = false;
        console.log(data);
      });
  }

}
