import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addDevice() {
    // TODO: send informations to server and recive json file
  }

}
