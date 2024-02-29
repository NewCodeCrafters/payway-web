import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../../service/payway.service';

@Component({
  selector: 'activate',
  standalone: true,
  templateUrl: './activate.component.html',
})
export class ActivateUser implements OnInit {
  constructor(public route: Router, public auth: Auth) {}
  ngOnInit(): void {
    const path = window.location.pathname.split('/');
    if (path.length !== 4) {
      this.route.navigate(['404'], { skipLocationChange: true });
      return;
    }
    const [token, uid] = path.slice(2);
    const send_activation = this.auth.activate_user({ token, uid });
    send_activation.subscribe((config) => {
      // this.route.navigate(['login']);
      console.log(config);
    });
  }
}
