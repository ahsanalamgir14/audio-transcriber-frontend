import { Injectable } from '@angular/core';
import { UtilityService } from './utility.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginStateSubject: Subject<boolean> = new Subject<boolean>();
  loginState$: Observable<any> = this.loginStateSubject.asObservable();

  constructor(private utilityService: UtilityService, private router: Router) { }

  UpdateLoginState(value: boolean) {
    this.loginStateSubject.next(value);
  }
  
  async login(data: any): Promise<boolean> {
    // return await this.apiService.postWithoutAuthHeader('/Users/Authenticate', data)
      // .then(response => {
        // this.utilityService.setCookieWithExpiration(response.UserData, response.validUntilUtc)
        this.utilityService.setCookieWithExpiration(JSON.stringify(data))
        return true;
      // })
      // .catch(error => {
        // console.error('Error:', error);
        // return false;
      // });
  }

  isAuthenticatedUser(): boolean {
    return this.utilityService.isUserDataValid()
  }

  logout(): void {
    this.utilityService.logout();
  }
}