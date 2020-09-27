import { Component } from '@angular/core';
import { SharedService } from '../../Services/shared/shared.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})

export class NotfoundComponent {
	lang: string;
	titulo_page:string;
	mensaje_principal: string;
	home_text: string;
	home_url: string = "/home";
	bnr404:string = "https://desistemasweb.com/images/img-banners/bnr-404.jpg";	
	
	constructor(
		private shared: SharedService
	) {
		this.lang = this.shared.getSelectedLanguage();

		this.titulo_page = this.lang === "esp" ? "&iexcl;Esta página no existe!": "This page does not found!";
		this.mensaje_principal = this.lang === "esp" ? "Pero no te preocupes, da click en el botón y vuela a un lugar seguro." : "But don't worry, click on the button and fly to a safe place.";
		this.home_text = this.lang === "esp" ? "Ir a casa." : "Go home.";

	}
}
