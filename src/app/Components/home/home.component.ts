import { Component, OnInit } from '@angular/core';
import { HomeService, homeDataInterface } from '../../Services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	/*propiedades*/
	loading: boolean = true;
	generalError: boolean = false;
	generalErrorMsj: string;
	//get data
	homeData: homeDataInterface[] = [];
	
	constructor(private homeServices: HomeService) {}

	ngOnInit() {
		this.homeServices.getHomeData()
		.subscribe(
			(data: homeDataInterface[]) =>{
				this.homeData = data;
				this.loading = false;
			},
			(err: any) => {
				this.generalError = true;
				this.generalErrorMsj = err.message;
		  	}
		);
	}

}
