import { Component, OnInit } from '@angular/core';
import { ResponsiveService, responsiveDataInterface } from '../../Services/responsive/responsive.service';

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.css']
})
export class ResponsiveComponent implements OnInit {
	/*propiedades*/
	loading: boolean = true;
	generalError: boolean = false;
	generalErrorMsj: string;
	//get data
	responsiveData: responsiveDataInterface[] = [];

	constructor( private responsiveService: ResponsiveService ){}
	
	ngOnInit() {
		this.responsiveService.getResponsiveData()
		.subscribe( 
			(data: responsiveDataInterface[]) =>{
				this.responsiveData = data;
				this.loading = false;
			},
			(err: any) => {
				this.generalError = true;
				this.generalErrorMsj = err.message;
				}
		);
	}
}

