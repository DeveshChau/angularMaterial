import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { InternationalizationComponent } from './internationalization/internationalization.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsAndIndicatorsComponent } from './buttons-and-indicators/buttons-and-indicators.component';

import { ButtonsAndIndicatorsModule } from './buttons-and-indicators/buttons-and-indicators.module';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { StepperComponent } from './layout/stepper/stepper.component';
import { TreeComponent } from './layout/tree/tree.component';
import { AutocompleteComponent } from './formLayout/autocomplete/autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    InternationalizationComponent,
    TypographyComponent,
    ButtonsAndIndicatorsComponent,
    StepperComponent,
    TreeComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    ButtonsAndIndicatorsModule,
    AppRoutingModule
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
