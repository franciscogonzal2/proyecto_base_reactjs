import { Component, OnInit } from '@angular/core';
import { OfertaService, ofertaDataInterface } from '../../Services/oferta/oferta.service';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
	/*propiedades*/
	loading: boolean = true;
	generalError: boolean = false;
	generalErrorMsj: string;
	//get data
	ofertaData: ofertaDataInterface[] = [];

	constructor(
		private ofertaService: OfertaService
	){}

	ngOnInit() {
		this.ofertaService.getOfertaData()
		.subscribe( 
			(data: ofertaDataInterface[]) =>{
				this.ofertaData = data;
				this.loading = false;
			},
			(err: any) => {
				this.generalError = true;
				this.generalErrorMsj = err.message;
		  	}
		);
	}
}
