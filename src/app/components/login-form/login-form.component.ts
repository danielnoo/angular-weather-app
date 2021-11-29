import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  showSignIn: boolean = true;
  signInName: string = '';
  signInPassword: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  onSignIn () {
    console.log('sign in attempt');
    
  }
}
