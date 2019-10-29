import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datalogger';


  navLinks = [
    { path: 'general', label: 'General'},
    { path: 'temperature', label: 'Temperature'},
    { path: 'airpressure', label: 'Airpressure'},
    { path: 'humidity', label: 'Humidity'}
  ];
}
