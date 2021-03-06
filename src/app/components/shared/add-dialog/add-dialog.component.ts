import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfigPresenterDialogComponent } from '../config-presenter-dialog/config-presenter-dialog.component';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  positionTag: string;
  latitude: number;
  longitude: number;
  description: string;

  // TODO: input validation via formcontroll


  constructor(private dataService: DataService, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {
  }

  addDevice() {
   this.dataService.postData({
      latitude:  this.latitude,
      longitude: this.longitude,
      description: this.description,
      position_tag: this.positionTag
   }).subscribe(data => {
     console.log(data);
     this.dialog.open(ConfigPresenterDialogComponent, {
      data: {
        station_id: data.station_id,
        api_key: data.api_key,
        secret: data.secret
       }
     });
     this.snackBar.open('Created station successful!', null, {
       duration: 2000,
     });
   });
  }


}
