import { Component, OnInit } from '@angular/core';
import { WebpacksService, webpacksDataInterface } from '../../Services/webpacks/webpacks.service';

@Component({
  selector: 'app-webpacks',
  templateUrl: './webpacks.component.html',
  styleUrls: ['./webpacks.component.css']
})
export class WebpacksComponent implements OnInit {
	/*propiedades*/
	loading: boolean = true;
	generalError: boolean = false;
	generalErrorMsj: string;
	//get data
	webPacksData: webpacksDataInterface[] = [];

	constructor( private webPacksServices: WebpacksService ) {}

	ngOnInit() {
		this.webPacksServices.getWebPacksData()
		.subscribe( 
			(data: webpacksDataInterface[]) =>{
				this.webPacksData = data;
				this.loading = false;
			},
			(err: any) => {
				this.generalError = true;
				this.generalErrorMsj = err.message;
			}
		);
	}

	openModalTermsPromo(titulo: string, terms: string){
		alert(titulo + terms);
	}

	bgHeaderClass(id:number){
		let headerBgClases = [
			"header",
			id == 1 ? "bg-success" : "",
			id == 2 ? "bg-primary" : "",
			id == 3 ? "bg-secondary" : "",
			id == 4 ? "bg-dark" : "",
		];
		return headerBgClases;
	}

	redTextClass(valido:number){
		let redText= [
			"textito_oferta",
			valido == 1 ? "textito_color" : "",
		];
		return redText;
	}

	bgBottonClass(id:number){
		let headerBtnClases = [
			"btn",
			"btn-lg",
			"btn-block" ,
			id == 1 ? "btn-success" : "",
			id == 2 ? "btn-primary" : "",
			id == 3 ? "btn-secondary" : "",
			id == 4 ? "btn-dark" : "",
		];
		return headerBtnClases;
	}
	
}