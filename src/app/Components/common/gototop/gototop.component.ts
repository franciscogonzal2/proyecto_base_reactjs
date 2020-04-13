import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gototop',
  templateUrl: './gototop.component.html',
  styleUrls: ['./gototop.component.css']
})
export class GototopComponent {
  @Input() pager: string;
  constructor() {}
}
