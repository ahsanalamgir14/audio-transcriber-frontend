import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FlowbiteService } from './services/flowbite.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'cliente';

  constructor(private translate: TranslateService, private flowbiteService: FlowbiteService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }


  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
