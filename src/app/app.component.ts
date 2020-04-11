import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public languages = [
    { id: 1, value: 'en', label: 'English' },
    { id: 2, value: 'jp', label: 'Japanese' }
  ]
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'jp']);
    translate.setDefaultLang('en');
    const broserLang = translate.getBrowserLang();
    translate.use(broserLang.match(/en|jp/) ? broserLang : 'en');
  }
}
