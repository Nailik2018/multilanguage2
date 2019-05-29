import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  useLanguage(language: string) {
    this.translate.use(language);
  }
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }
}
