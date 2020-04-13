import { Component, OnInit} from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Location } from '@angular/common';
import { pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  href: string = "";
  
  constructor(
    private location: Location,
    private router: Router
  ){

    //gobal path
    router.events.subscribe( () => {
      if(location.path() != ""){
        this.href = location.path();
      } else {
        this.href = 'home';
      }
    });

  }

  ngOnInit() {}

  onActivate(componentReference) {
		console.log(componentReference)
		componentReference.anyFunction();
	 }

}
