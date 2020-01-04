import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { LinechartComponent } from './components/shared/linechart/linechart.component';
import { AddDialogComponent } from './components/shared/add-dialog/add-dialog.component';
import { ConfigPresenterDialogComponent } from './components/shared/config-presenter-dialog/config-presenter-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    TemperatureComponent,
    AirpressureComponent,
    HumidityComponent,
    NumbersComponent,
    LinechartComponent,
    AddDialogComponent,
    ConfigPresenterDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddDialogComponent, ConfigPresenterDialogComponent]
})
export class AppModule { }
