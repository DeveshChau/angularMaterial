import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatCardModule,
    MatRadioModule,
    MatSliderModule
  ],
  exports: [
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatCardModule,
    MatRadioModule,
    MatSliderModule
  ]
})
export class MaterialModule { }
