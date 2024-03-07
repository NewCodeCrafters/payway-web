import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'transfer',
  templateUrl: './transfer.component.html',
  imports: [Navbar],
})
export class TransferPage {}
