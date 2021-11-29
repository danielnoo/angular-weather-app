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
    const user = {
      username: this.usernameRegister,
      name: this.displayNameRegister,
      password: this.passwordRegister
    }
    this.loginService.register(user).subscribe((result) => console.log(result))

    this.usernameRegister = '';
    this.displayNameRegister = '';
    this.passwordRegister = '';
  }
}
