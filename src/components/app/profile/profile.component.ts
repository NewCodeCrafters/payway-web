import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'profile',
  templateUrl: './profile.component.html',
  imports: [Navbar],
})
export class ProfilePage {}
