import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
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

@Component({
  standalone: true,
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgFor,
    NgIf,
  ],
})
export class SignUp implements OnInit {
  countries = countries as { name: string; code: string; dial_code: string }[];
  ngOnInit(): void {
    this.countries = countries;
  }
  applyForm = new FormGroup<{
    phone_number: FormControl<number | null>;
    re_password: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    country: FormControl<string | null>;
  }>(
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
  validatePassowrd(control: AbstractControl): ValidationErrors | null {
    const password = control.get('passowrd');
    const re_password = control.get('re_password');
    if (password && re_password) {
      return password === re_password ? null : { passwordMismatch: true };
    } else {
      return null;
    }
  }
  async handleSubmit() {
    if (!this.applyForm.status || this.applyForm.status === 'INVALID') return;
    if (this.applyForm.value.re_password !== this.applyForm.value.password) {
      console.log(this.applyForm.value, this.applyForm.errors);
      console.log(this.applyForm.errors);
    }
  }
}
