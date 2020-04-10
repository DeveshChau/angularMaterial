import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'jp']);
    translate.setDefaultLang('en');
    const broserLang = translate.getBrowserLang();
    translate.use(broserLang.match(/en|jp/) ? broserLang : 'en');
  }
  title = 'angularMaterialComponent';
}
