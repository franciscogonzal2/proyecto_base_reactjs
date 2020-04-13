import { Component, OnInit } from '@angular/core';
import { NosotrosService, nosotrosDataInterface } from '../../Services/nosotros/nosotros.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})

export class NosotrosComponent implements OnInit {
	/*propiedades*/
	loading: boolean = true;
	generalError: boolean = false;
	generalErrorMsj: string;
	//get data
	nosotrosData: nosotrosDataInterface[] = [];
	
	constructor( private nosotrosService: NosotrosService ){}

	ngOnInit() {
		this.nosotrosService.getNosotrosData()
		.subscribe( 
			(data: nosotrosDataInterface[]) =>{
				this.nosotrosData = data;
				this.loading = false;
			},
			(err: any) => {
				this.generalError = true;
				this.generalErrorMsj = err.message;
		  	}
		);
	}

}
