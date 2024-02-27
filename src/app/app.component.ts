import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUp } from '../components/auth/signup/signup.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'payway-web';
}
