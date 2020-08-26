import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-modal',
  templateUrl: './promo-modal.component.html',
  styleUrls: ['./promo-modal.component.css']
})
export class PromoModalComponent implements OnInit{
	@Input() modalObj: object;
	@Output() onClose: EventEmitter<boolean> = new EventEmitter();

	tituloModal: string;
	dataModal: Array<any>;
	regularPrice: number;
	regulartext: string;

	display: string ='block'; //default Variable

	constructor() {}

	ngOnInit(){
		this.tituloModal = this.modalObj["titulo"];
		this.dataModal = this.modalObj["data"];
		this.regularPrice = this.modalObj["regularPrice"];
		this.regulartext = this.modalObj["regularPriceText"];
	}

	closeModalDialog(){
		this.display='none'; //set none css after close dialog
		this.onClose.emit();
	}

	getSimbol(regularPrice: number){
		return "$" + regularPrice;
	}

	newPrice(regularPrice: number, porcentaje: number){
		return ( regularPrice - (regularPrice * porcentaje / 100 ) );
	}

	getPromoInfo(promoInfo: string, idPromo: string, porcentaje: number){
		return promoInfo.replace("<PORCENTAGE>", porcentaje.toString()) + "&nbsp;<strong>" + idPromo + "</strong>";
	}

	getPromoText(porcentaje: number, promoText: string){
		return promoText.replace("<PORCENTAGE>", porcentaje.toString());
	}

	getFechaPromo(text: string, ini: string, fin: string){
		let fechaPromo: string;
		fechaPromo = text.replace("<FECHA_INICIO_PROMO>", ini);
		fechaPromo = fechaPromo.replace("<FECHA_FIN_PROMO>", fin);
		return fechaPromo;
	}

	concatHashtag(id: string){
		return "#" + id;
	}

}
