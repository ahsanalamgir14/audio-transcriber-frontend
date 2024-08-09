import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LogInGuardian } from './components/log-in/log-in.guardian';
import { NgxPaginationModule } from 'ngx-pagination';
// Componentes
import { LogInComponent } from './components/log-in/log-in.component';
import { GrabadoraComponent } from './components/grabadora/grabadora.component';
import { MisAudiosComponent } from './components/mis-audios/mis-audios.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AudioBlobComponent } from './components/audio-blob/audio-blob.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { UserPageComponent } from './components/user-page/user-page.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    GrabadoraComponent,
    MisAudiosComponent,
    AudioBlobComponent,
    MenuComponent,
    HomeComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    provideClientHydration(),
    ScreenTrackingService,
    UserTrackingService,
    CookieService,
    LogInGuardian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
