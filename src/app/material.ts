import {MatButtonModule, MatCheckboxModule, MatSliderModule, MatToolbarModule, MatIconModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
        MatToolbarModule,
        MatIconModule
    ]
})
export class MaterialModule { }