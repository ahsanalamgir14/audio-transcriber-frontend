import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from "firebase/compat/app";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{

  constructor(private router: Router,) {   }

  ngOnInit(): void { }

  logIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.router.navigate(['/home']);
    }
}
