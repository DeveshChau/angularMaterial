import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { MatButtonsComponent } from './mat-buttons/mat-buttons.component';
import { MatButtonsToggleComponent } from './mat-buttons-toggle/mat-buttons-toggle.component';
import { ButtonsAndIndicatorsRoutingModule } from './buttons-and-indicators-routing.module';
import { MatBadgeComponent } from './mat-badge/mat-badge.component';
import { MatProgessBarComponent } from './mat-progess-bar/mat-progess-bar.component';

@NgModule({
  declarations: [
    MatButtonsComponent,
    MatButtonsToggleComponent,
    MatBadgeComponent,
    MatProgessBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ButtonsAndIndicatorsRoutingModule
  ]
})
export class ButtonsAndIndicatorsModule { }
