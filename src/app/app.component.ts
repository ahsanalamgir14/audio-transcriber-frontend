import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FlowbiteService } from './services/flowbite.service';
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'cliente';
  isUserLogin = false;

  constructor(private translate: TranslateService, private flowbiteService: FlowbiteService, private authService: AuthService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
    this.authService.loginState$.subscribe((value) => {
      this.isUserLogin = value;
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
