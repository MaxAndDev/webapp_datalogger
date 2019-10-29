import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralComponent } from './components/general/general.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { AirpressureComponent } from './components/airpressure/airpressure.component';
import { HumidityComponent } from './components/humidity/humidity.component';

const routes: Routes = [
  { path: 'general', component: GeneralComponent},
  { path: 'temperature', component: TemperatureComponent},
  { path: 'airpressure', component: AirpressureComponent},
  { path: 'humidity', component: HumidityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
