import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'not-found',
  template: `<div class="bg-slate-900 text-2xl text-white">Invalid Path</div>`,
})
export class NotFound {}
