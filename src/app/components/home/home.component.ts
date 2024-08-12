import { FlowbiteService } from './../../services/flowbite.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class HomeComponent implements OnInit {
  
  public user: string | undefined;
  public email: string | undefined;

  constructor(private router: Router, private cookies:CookieService, private flowbiteService: FlowbiteService) { }

  ngOnInit(): void {
    this.user = "testuser";
    const userData = this.cookies.get("userData");
    console.log('userData: ', userData);
    if (userData) {
      try {
        const userDataObj = JSON.parse(userData);
        this.email = userDataObj.email;
      } catch (e) {
        console.error("Error parsing userData from cookies", e);
      }
    }
  }

  navigateToRoute(url: string): void {
    this.router.navigate([url]);
  }
}
