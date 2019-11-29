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
        MatGridListModule,
        MatDialogModule} from '@angular/material';
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
        MatGridListModule,
        MatDialogModule
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
        MatGridListModule,
        MatDialogModule
    ]
})
export class MaterialModule { }
