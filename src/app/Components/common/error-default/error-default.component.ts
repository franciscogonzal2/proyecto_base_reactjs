import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-default',
  templateUrl: './error-default.component.html',
  styleUrls: ['./error-default.component.css']
})
export class ErrorDefaultComponent {
  @Input() errMsj: string;
  showButton: boolean = true;
  constructor(private route: ActivatedRoute) {
    const pathName = this.route.routeConfig.path;
    if (pathName === "home") {
      this.showButton = false;
    }
  }
}
