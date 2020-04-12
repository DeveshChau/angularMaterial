import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsAndIndicatorsComponent } from './buttons-and-indicators.component';
import { MatButtonsComponent } from './mat-buttons/mat-buttons.component';
import { MatButtonsToggleComponent } from './mat-buttons-toggle/mat-buttons-toggle.component';
import { MatBadgeComponent } from './mat-badge/mat-badge.component';
import { MatProgessBarComponent } from './mat-progess-bar/mat-progess-bar.component';


const buttonsAndIndicatorsRoutes: Routes = [
  {
    path: 'buttonsAndIndicators',
    component: ButtonsAndIndicatorsComponent,
    children: [
      {
        path: 'mat-buttons',
        component: MatButtonsComponent
      },
      {
        path: 'mat-buttons-toggle',
        component: MatButtonsToggleComponent
      },
      {
        path: 'mat-buttons-badge',
        component: MatBadgeComponent
      },
      {
        path: 'mat-progress-bar',
        component: MatProgessBarComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(buttonsAndIndicatorsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ButtonsAndIndicatorsRoutingModule { }
