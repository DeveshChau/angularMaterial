import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { InternationalizationComponent } from './internationalization/internationalization.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsAndIndicatorsComponent } from './buttons-and-indicators/buttons-and-indicators.component';

import { ButtonsAndIndicatorsModule } from './buttons-and-indicators/buttons-and-indicators.module';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    InternationalizationComponent,
    TypographyComponent,
    ButtonsAndIndicatorsComponent
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
    MaterialModule,
    ButtonsAndIndicatorsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
