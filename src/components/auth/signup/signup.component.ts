import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {
  FormsModule,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  ],
})
export class SignUp {
  constructor(private http:HttpClient){

  }
  applyForm = new FormGroup<{
    phone_number: FormControl<number | null>;
    re_password: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>({
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
  });
  async handleSubmit() {
    // if (!this.applyForm.status) return;
    if (this.applyForm.value.re_password !== this.applyForm.value.password) {
      console.log(this.applyForm.value, this.applyForm.errors);
      this.applyForm.setErrors((errors: ValidationErrors) => {
        console.log(errors);
      });
    }
    try {
      const res = await this.http.post(`http://localhost:8000`,JSON.stringify(this.applyForm.value))
    } catch (error) {
      
    }
  }
}
