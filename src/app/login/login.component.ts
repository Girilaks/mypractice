import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) {

  }
  // loginForm = new FormGroup({
  //   userName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
  //   password: new FormControl('', [Validators.required])
  // })

  loginForm = {
    userName: '',
    password: ''
  }
  stepValue = 5;

  handleLogin() {
    if(this.loginForm) {
      this.router.navigateByUrl('/heros')
    }
    this.authService.login(this.loginForm);
  }
}
