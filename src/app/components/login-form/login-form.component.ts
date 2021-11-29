import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  showSignIn: boolean = true;
  signingIn: boolean = true;
  signInName: string = '';
  signInPassword: string = '';
  usernameRegister: string = '';
  displayNameRegister: string = '';
  passwordRegister: string = '';

  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSignIn () {
    console.log('sign in attempt');
    
  }

  showRegister () {
    this.signingIn = !this.signingIn
  }

  onRegister () {
    
    // create observer to pass to subscribe
    
    const myObserver = {
      next: (result: any) => console.log('Http result:', result),
      error: (error: any) => console.log('Http error:', error.error),
      complete: () => console.log('Http request complete')
    }
    
    // make user object to comply with mongoose model on server

    const user = {
      username: this.usernameRegister,
      name: this.displayNameRegister,
      password: this.passwordRegister
    }
    
    // call user registration service
    
    this.loginService.register(user).subscribe(myObserver)


    // reset form

    this.usernameRegister = '';
    this.displayNameRegister = '';
    this.passwordRegister = '';
  }
}
