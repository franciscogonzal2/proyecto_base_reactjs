import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portafolio-modal',
  templateUrl: './portafolio-modal.component.html',
  styleUrls: ['./portafolio-modal.component.css']
})
export class PortafolioModalComponent implements OnInit {
	@Input() modalData: object;
	@Output() onClose: EventEmitter<boolean> = new EventEmitter();
	
	modalArray: Array<object>;

	constructor() {}

	ngOnInit(){
		this.modalArray = [this.modalData];
	}

	closeModalDialog(){
		this.onClose.emit();
	}
}
