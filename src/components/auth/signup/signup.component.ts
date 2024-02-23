import { Component, OnInit } from '@angular/core';
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
import { NgFor, NgIf } from '@angular/common';
type SignupUser = {
  phone_number: FormControl<number | null>;
  re_password: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  country: FormControl<string | null>;
};
@Component({
  standalone: true,
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  imports: [FormsModule, ReactiveFormsModule, NgFor, NgIf],
})
export class SignUp implements OnInit {
  countries = countries as { name: string; code: string; dial_code: string }[];
  ngOnInit(): void {
    this.countries = countries;
  }
  applyForm = new FormGroup<SignupUser>(
    {
      phone_number: new FormControl<number | null>(null, {
        validators: [Validators.required, Validators.pattern(/\d/gi)],
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
    },
    {
      validators: this.validatePassowrd,
    }
  );
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
    if (this.applyForm.value.re_password !== this.applyForm.value.password) {
      console.log(this.applyForm.get('re_password'), this.applyForm.errors);
      console.log(this.applyForm.errors);
    }
  }
}
