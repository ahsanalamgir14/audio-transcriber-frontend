import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cliente';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
