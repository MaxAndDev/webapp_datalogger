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
        MatTableModule,
        MatGridListModule} from '@angular/material';
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
        MatTableModule,
        MatGridListModule
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
        MatTableModule,
        MatGridListModule
    ]
})
export class MaterialModule { }
