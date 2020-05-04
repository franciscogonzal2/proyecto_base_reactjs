import { Component, OnInit } from '@angular/core';
import { HomeService, homeDataInterface } from '../../Services/home/home.service';
import { Router } from '@angular/router';
import { LogInService } from '../../Services/logIn/logIn.service';

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
	
	constructor(
		private homeServices: HomeService,
		private logIn: LogInService,
		private route: Router ) {}

	ngOnInit() {
		//estoy logueado?
		if( this.logIn.isSignIn() ){
			this.route.navigateByUrl('/user');
		}

		this.homeServices.getHomeData()
		.subscribe(
			(data: homeDataInterface[]) =>{
				this.homeData = data;
				this.loading = false;
			},
			(error: any) => {
				this.generalError = true;
				this.generalErrorMsj = error.message;
		  	}
		);
	}

}
