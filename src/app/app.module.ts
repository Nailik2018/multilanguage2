import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SensorsOverviewModule } from "./pages/sensors-overview/sensors-overview.module";
import {InstallationModule} from "./pages/installation/installation.module";
import { NaviComponent } from './navi/navi.component';
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // configure the imports
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SensorsOverviewModule,
    InstallationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  /**
   * URL setzen zur Sprach Datei de en und fr .json
   * Als localhost anderer Pfad als beim kompilierten Stand
   */
  if (window.location.hostname === 'localhost') {
    return new TranslateHttpLoader(http);
  } else {
    const serverUrl = environment.baseUrl;
    return new TranslateHttpLoader(http, serverUrl + '/assets/i18n/', '.json');
  }
}
