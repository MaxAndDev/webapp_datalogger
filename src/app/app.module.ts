import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';

import { MaterialModule } from './material';
import { GeneralComponent } from './components/general/general.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { AirpressureComponent } from './components/airpressure/airpressure.component';
import { HumidityComponent } from './components/humidity/humidity.component';
import { NumbersComponent } from './components/shared/numbers/numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    TemperatureComponent,
    AirpressureComponent,
    HumidityComponent,
    NumbersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
