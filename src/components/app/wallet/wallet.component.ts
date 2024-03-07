import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'wallet',
  templateUrl: './wallet.component.html',
  imports: [Navbar],
})
export class WalletPage {}
