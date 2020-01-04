import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-config-presenter-dialog',
  templateUrl: './config-presenter-dialog.component.html',
  styleUrls: ['./config-presenter-dialog.component.scss']
})
export class ConfigPresenterDialogComponent implements OnInit {

  apikey: string;
  stationId: string;
  secret: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {  }

  ngOnInit() {
    this.apikey = this.data.api_key;
    this.stationId = this.data.station_id;
    this.secret = this.data.secret;
  }




}
