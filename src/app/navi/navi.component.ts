import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {

  burger: boolean;

  constructor(
      private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  useLanguage(language: string) {
    document.cookie = 'selectedLanguage=' + language;
    // document.cookie =  language;
    this.translate.use(language);
  }
}
