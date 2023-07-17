import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterValidator } from './validators/register-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    userName: new FormControl('', [Validators.required, Validators.minLength(8),
    Validators.pattern(/(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{8,24}$/gm)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15),
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15),
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)])
  }, [RegisterValidator.match('password', 'confirmPassword')])

  handleRegister() {
    console.log(this.registerForm)
  }
}
