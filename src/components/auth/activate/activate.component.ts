import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'activate',
  standalone: true,
  templateUrl: './activate.component.html',
})
export class ActivateUser implements OnInit {
  constructor(public route: Router) {}
  ngOnInit(): void {
    const path = window.location.pathname.split('/');
    if (path.length !== 4) {
      this.route.navigate(['404'], { skipLocationChange: true });
      return;
    }
    const [token, uid] = path.slice(2);
  }
}
