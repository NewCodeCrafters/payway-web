import { NgModule } from '@angular/core';
import { LucideAngularModule, Wallet2 } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ Wallet2 })],
})
export class TransferLucide {}
