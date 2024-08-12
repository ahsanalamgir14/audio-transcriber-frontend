import { AuthService } from './../../services/auth-service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from "firebase/compat/app";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit{

  constructor(private router: Router, private authService: AuthService) {   }

  ngOnInit(): void { }

  logIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const data = {
      email: email,
      password: password
    }
    this.authService.login(data);
    this.authService.UpdateLoginState(true);
    this.router.navigate(['/home']);
    }
}
