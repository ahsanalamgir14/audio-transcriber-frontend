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
  public userName: string | undefined;

  constructor(private router: Router, private cookies:CookieService) { }

  ngOnInit(): void {
    this.user = "testuser";
    const userData = this.cookies.get("userData");
    if (userData) {
      try {
        const userDataObj = JSON.parse(userData);
        this.userName = userDataObj.nombre;
      } catch (e) {
        console.error("Error parsing userData from cookies", e);
      }
    }
  }

  navigateToRoute(url: string): void {
    this.router.navigate([url]);
  }
}
