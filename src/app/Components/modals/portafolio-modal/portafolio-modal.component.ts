import { Component, Input} from '@angular/core';
@Component({
  selector: 'app-portafolio-modal',
  templateUrl: './portafolio-modal.component.html',
  styleUrls: ['./portafolio-modal.component.css']
})
export class PortafolioModalComponent{
  @Input() modalData: Array<any>;
	@Input() letModal: any;

  closeModal(){
		this.letModal.dismiss('Cross click');
	}
}
