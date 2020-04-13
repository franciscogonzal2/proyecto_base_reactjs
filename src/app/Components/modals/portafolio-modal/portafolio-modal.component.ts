import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portafolio-modal',
  templateUrl: './portafolio-modal.component.html',
  styleUrls: ['./portafolio-modal.component.css']
})
export class PortafolioModalComponent {
	@Input() modalId:string;
	@Input() modalTitulo:string;
	@Input() modalImagenUrl:string;
	@Input() modalFechaCreacion:string;
	@Input() modalUrl:string;
	@Output() onClose: EventEmitter<boolean> = new EventEmitter();

	display: string ='block'; //default Variable

	constructor() {}

	closeModalDialog(){
		this.display='none'; //set none css after close dialog
		this.onClose.emit();
	}
}
