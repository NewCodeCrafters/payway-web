import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { twMerge } from 'tailwind-merge';
export interface DynamicInput {
  placeholder: string;
  type: string;
  name: string;
  [key: string]: any;
}
@Component({
  selector: 'custom-input',
  standalone: true,
  templateUrl: './input.component.html',
  imports: [NgFor, FormsModule, ReactiveFormsModule],
})
export class InputEL {
  @Input() className: string = '';
  @Input() config!: DynamicInput;

  mainClass = twMerge(
    'border  shadow-sm h-9 w-full  text-white transition-all px-3 py-1 rounded-md bg-transparent',
    this.className
  );
}
