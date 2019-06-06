import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {

    /**
     * Sprach cookie abfragen und Sprache setzen
     */
    const language: string [] = document.cookie.split('=');
    const selectedLanguage = language[1];
    if (selectedLanguage === '' || selectedLanguage === undefined) {
      translate.setDefaultLang('de');
      document.cookie = 'selectedLanguage=' + 'de';
    } else {
      if (selectedLanguage === 'de' || selectedLanguage === 'fr' || selectedLanguage === 'en') {
        translate.setDefaultLang(selectedLanguage);
      } else {
        translate.setDefaultLang('de');
      }
    }
  }
}
