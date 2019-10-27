import {MatButtonModule, MatCheckboxModule, MatSliderModule, MatToolbarModule, MatIconModule, MatTabsModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule
    ]
})
export class MaterialModule { }