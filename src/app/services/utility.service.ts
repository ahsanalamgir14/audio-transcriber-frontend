import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private scannedHistorySubject: Subject<any> = new Subject<any>();
  scannedHistory$: Observable<any> = this.scannedHistorySubject.asObservable();

  constructor(private cookieService: CookieService) { }

  setCookieWithExpiration(userData: string) {
    // const expirationDate = new Date(validUntilUtc);
    // const expirationTime = expirationDate.getTime() - new Date().getTime();
    this.cookieService.set('userData', userData);
  }

  getUserData(): string {
    return this.cookieService.get('userData');
  }

  isUserDataValid(): boolean {
    const userDataExists = this.cookieService.check('userData');
    if (!userDataExists) {
      return false;
    }

    const userData = this.cookieService.get('userData');
    if (!userData || userData.trim() === '') {
      return false;
    }

    return true;
  }

  isUserLoggedIn(): boolean {
    return this.isUserDataValid();
  }

  logout() {
    this.cookieService.delete('userData');
    return true;
  }
  
}
