import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import countries from '../../../assets/CountryCodes.json';
import {
  FormsModule,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { SignupUser } from './signup.types';
import { Auth } from '../../../service/payway.service';
import { DynamicInput, InputEL } from '../../ui/input.component';

@Component({
  standalone: true,
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  imports: [FormsModule, ReactiveFormsModule, NgFor, NgIf, InputEL],
})
export class SignUp implements OnInit {
  constructor(private auth: Auth) {}
  countries = countries as { name: string; code: string; dial_code: string }[];
  ngOnInit(): void {
    this.countries = countries;
  }
  applyForm = new FormGroup<SignupUser>(
    {
      phone_number: new FormControl<number | null>(null, {
        validators: [
          Validators.required,
          Validators.pattern(/\d/gi),
          Validators.minLength(10),
        ],
      }),
      re_password: new FormControl('', {
        validators: [Validators.required],
      }),
      email: new FormControl('', {
        validators: [Validators.email, Validators.required],
      }),
      password: new FormControl('', {
        validators: [Validators.required],
      }),
      country: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
    },
    {
      validators: this.validatePassowrd,
    }
  );
  email: DynamicInput = {
    type: 'email',
    id: 'email',
    formControlName: 'email',
    placeholder: '',
    name: '',
    formGroup: this.applyForm,
    title: 'Email',
  };
  first_name: DynamicInput = {
    type: 'text',
    id: 'first_name',
    formControlName: 'first_name',
    placeholder: '',
    name: '',
    formGroup: this.applyForm,
    title: 'First Name',
  };
  last_name: DynamicInput = {
    type: 'text',
    id: 'last_name',
    formControlName: 'last_name',
    placeholder: '',
    name: '',
    formGroup: this.applyForm,
    title: 'Last Name',
  };
  phone_number: DynamicInput = {
    type: 'text',
    id: 'phone_number',
    formControlName: 'phone_number',
    placeholder: '',
    name: '',
    formGroup: this.applyForm,
  };
  password: DynamicInput = {
    type: 'text',
    id: 'password',
    formControlName: 'password',
    placeholder: '',
    name: '',
    formGroup: this.applyForm,
    title: 'Password',
  };
  re_password: DynamicInput = {
    type: 'text',
    id: 're_password',
    formControlName: 're_password',
    placeholder: '',
    name: '',
    formGroup: this.applyForm,
    title: 'Confirm Password',
  };
  validatePassowrd(
    control: AbstractControl<SignupUser>
  ): ValidationErrors | null {
    const password = control.get('password')?.value;
    const re_password = control.get('re_password')?.value;

    if (password && re_password) {
      return password === re_password ? null : { passwordMismatch: true };
    } else {
      return null;
    }
  }
  async handleSubmit() {
    if (!this.applyForm.status || this.applyForm.status === 'INVALID') {
      console.log(
        this.applyForm.errors,
        this.applyForm?.errors?.['passwordMismatch']
      );
      return;
    }

    console.log({
      email: this.applyForm.value.email!,
      password: this.applyForm.value.password!,
      re_password: this.applyForm.value.re_password!,
      phone_number: `${this.applyForm.value.country}${this.applyForm.value.phone_number}`,
    });
    const listener = this.auth.create_user({
      email: this.applyForm.value.email!,
      password: this.applyForm.value.password!,
      re_password: this.applyForm.value.re_password!,
      phone_number: `${this.applyForm.value.country}${this.applyForm.value.phone_number}`,
      first_name: this.applyForm.value.first_name!,
      last_name: this.applyForm.value.last_name!,
    });
    listener.subscribe((config) => {
      console.log(config);
    });
  }
}
