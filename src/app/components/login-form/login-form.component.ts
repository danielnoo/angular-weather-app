import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  showSignIn: boolean = true;
  signingIn: boolean = true;
  signInName: string = '';
  signInPassword: string = '';
  usernameRegister: string = '';
  displayNameRegister: string = '';
  passwordRegister: string = '';
  errorMessage: string = '';
  myObserver: object = {
    next: (result: any) => {
      console.log('Http result:', result);
    },
    error: (error: any) => {
      console.log('Http error:', error.error);
      // yes, mongoose unique validation errors are nested this way, haha.
      this.errorMessage = error.error.error;
    },
    complete: () => console.log('Http request complete'),
  };

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSignIn() {
    console.log('sign in attempt');
    // reset error message if there is one showing
    this.errorMessage = '';
    // create user object to pass
    const user = {
      username: this.signInName,
      password: this.signInPassword,
    };

    this.loginService.login(user).subscribe(this.myObserver);
  }

  showRegister() {
    this.signingIn = !this.signingIn;
  }

  onRegister() {
    // make user object to comply with mongoose model on server

    const user = {
      username: this.usernameRegister,
      name: this.displayNameRegister,
      password: this.passwordRegister,
    };

    // call user registration service

    this.loginService.register(user).subscribe(this.myObserver);

    // reset form

    this.usernameRegister = '';
    this.displayNameRegister = '';
    this.passwordRegister = '';
  }
}
