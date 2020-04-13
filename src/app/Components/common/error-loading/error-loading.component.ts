import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-loading',
  templateUrl: './error-loading.component.html',
  styleUrls: ['./error-loading.component.css']
})
export class ErrorLoadingComponent {
  @Input() errMsj: string;
  showButton: boolean = true;
  constructor(private route: ActivatedRoute) {
    const pathName = this.route.routeConfig.path;
    if (pathName === "home") {
      this.showButton = false;
    }
  }
}
