import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'activate',
  standalone: true,
  templateUrl: './activate.component.html',
})
export class ActivateUser implements OnInit {
  ngOnInit(): void {
    const path = window.location.pathname.split('/');
    if (path.length !== 4) {
      return;
    }
    const [token, uid] = path.slice(2);
  }
}
