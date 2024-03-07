import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'home',
  templateUrl: './home.component.html',
  imports: [Navbar],
})
export class HomePage {}
