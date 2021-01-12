import { Component, Input } from '@angular/core';
@Component({
	selector: 'app-promo-modal',
	templateUrl: './promo-modal.component.html',
	styleUrls: ['./promo-modal.component.css']
})
export class PromoModalComponent {
	@Input() modalPromoData: Array<any>;
	@Input() letModal: any;

	public isCollapsed: boolean = true;

	closeModal() {
		this.letModal.dismiss('Cross click');
	}

	getPromoInfo(promoInfo: string, idPromo: string, porcentaje: number) {
		return promoInfo.replace("<PORCENTAGE>", porcentaje.toString()) + "&nbsp;<strong>" + idPromo + "</strong>";
	}

	getSimbol(regularPrice: number) {
		return "$" + this.addCommas(regularPrice);
	}

	getPromoText(porcentaje: number, promoText: string) {
		return promoText.replace("<PORCENTAGE>", porcentaje.toString());
	}

	addCommas(nStr: number) {
		let n = nStr.toString()
		while (true) {
			var n2 = n.replace(/(\d)(\d{3})($|,|\.)/g, '$1,$2$3')
			if (n == n2) break
			n = n2
		}
		return n;
	}

	newPrice(regularPrice: number, porcentaje: number) {
		return (regularPrice - (regularPrice * porcentaje / 100));
	}

	getFechaPromo(text: string, ini: string, fin: string) {
		let fechaPromo: string;
		fechaPromo = text.replace("<FECHA_INICIO_PROMO>", ini);
		fechaPromo = fechaPromo.replace("<FECHA_FIN_PROMO>", fin);
		return fechaPromo;
	}
}
