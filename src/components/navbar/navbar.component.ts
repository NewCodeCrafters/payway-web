import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PAGE_ROUTES } from '../../app/app.routes';

@Component({
  selector: 'nav-bar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [RouterModule],
})
export class Navbar {
  constructor(public routes: PAGE_ROUTES) {}
}
