import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternationalizationComponent } from './internationalization/internationalization.component';
import { MatButtonsComponent } from './mat-buttons/mat-buttons.component';
import { TypographyComponent } from './typography/typography.component';


const routes: Routes = [
  { path: 'i18n', component: InternationalizationComponent },
  { path: 'matButtons', component: MatButtonsComponent },
  { path: 'typography', component: TypographyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
