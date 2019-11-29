import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { AddDialogComponent } from './components/shared/add-dialog/add-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datalogger';

  constructor(public dialog: MatDialog) { }


  navLinks = [
    { path: 'general', label: 'General'},
    { path: 'temperature', label: 'Temperature'},
    { path: 'airpressure', label: 'Airpressure'},
    { path: 'humidity', label: 'Humidity'}
  ];


  openAddDialog() {
    this.dialog.open(AddDialogComponent);
  }
}
