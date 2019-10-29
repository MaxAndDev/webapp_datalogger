import {MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatCardModule,
        MatDividerModule,
        MatTableModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatCardModule,
        MatDividerModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatCardModule,
        MatDividerModule,
        MatTableModule
    ]
})
export class MaterialModule { }
