import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material';
import { GeneralComponent } from './components/general/general.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { AirpressureComponent } from './components/airpressure/airpressure.component';
import { HumidityComponent } from './components/humidity/humidity.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    TemperatureComponent,
    AirpressureComponent,
    HumidityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
