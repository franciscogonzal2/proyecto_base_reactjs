import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})

export class NotfoundComponent {
	titulo_page:string = "Esta página no existe";
	mensaje_principal:string = "Pero no te preocupes, solo dá click en cualquier opción del menu y listo.";
	bnr404:string = "assets/img-banners/bnr-404.jpg";
	
	constructor() {}
}
