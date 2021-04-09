import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResopnseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  error: string = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResopnseData>;

    if (this.isLoginMode) {
      authObs = this.authService.signIn(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(resData => {
      console.log(resData);
      this.router.navigate(['./home'])
    }, error => {
      console.log(error);
      this.error = error;
    });

    form.reset();
  }
  onHandleError() {
    this.error = null;
  }

}
