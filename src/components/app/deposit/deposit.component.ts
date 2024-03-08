import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar.component';

@Component({
  selector: 'deposit',
  standalone: true,
  templateUrl: './deposit.component.html',
  imports: [Navbar],
})
export class DepositPage {}
