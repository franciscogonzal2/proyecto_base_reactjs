import { Component, OnInit } from '@angular/core';
import { WebdesignService, webDesignDataInterface } from '../../Services/webdesign/webdesign.service';

@Component({
  selector: 'app-webdesign',
  templateUrl: './webdesign.component.html',
  styleUrls: ['./webdesign.component.css']
})
export class WebdesignComponent implements OnInit {
	/*propiedades*/
	loading: boolean = true;
	generalError: boolean = false;
	generalErrorMsj: string;

	//get data
	webDesignData: webDesignDataInterface[] = [];

	constructor( private webDesignService: WebdesignService ){}

	ngOnInit() {
		this.webDesignService.getWebDesignData()
		.subscribe( 
			(data: webDesignDataInterface[]) =>{
				this.webDesignData = data;
				this.loading = false;
			},
			(err: any) => {
				this.generalError = true;
				this.generalErrorMsj = err.message;
		  	}
		);
	}
}
