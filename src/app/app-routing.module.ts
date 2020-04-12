import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternationalizationComponent } from './internationalization/internationalization.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsAndIndicatorsComponent } from './buttons-and-indicators/buttons-and-indicators.component';

const routes: Routes = [
  { path: 'i18n', component: InternationalizationComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'buttonsAndIndicators', component: ButtonsAndIndicatorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
