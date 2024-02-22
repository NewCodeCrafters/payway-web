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
} from '@angular/forms';

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
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', {
      validators: Validators.email,
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
  });
  handleSubmit() {
    console.log(this.applyForm.value, this.applyForm.valid);
  }
}
