import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternationalizationComponent } from './internationalization/internationalization.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsAndIndicatorsComponent } from './buttons-and-indicators/buttons-and-indicators.component';
import { StepperComponent } from './layout/stepper/stepper.component';
import { TreeComponent } from './layout/tree/tree.component';

const routes: Routes = [
  { path: 'i18n', component: InternationalizationComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'buttonsAndIndicators', component: ButtonsAndIndicatorsComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'tree', component: TreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
