import { Component, OnInit, DoCheck } from '@angular/core';
import { HomeService, homeDataInterface } from '../../Services/home/home.service';
import { Router } from '@angular/router';
import { LogInService } from '../../Services/logIn/logIn.service';
import { AppState } from '../../Redux/globalReducer';
import { Store } from '@ngrx/store';
import { setHomeActionStart } from 'src/app/Redux/Actions/home/home.action';
import { SimpleStore } from 'src/app/Stores/states.store';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, DoCheck {
	/*propiedades*/
	loading: boolean = true;
	generalError: boolean = false;
	generalErrorMsj: string;
	//get data
	homeData: homeDataInterface[] = [];
	selectedLanguage: string;
	states: any;

	constructor(
		private logIn: LogInService,
		private route: Router,
		private store: Store<AppState>
	) { 

		this.states = new SimpleStore({
			selectedLanguage: ""
		});
	}

	ngOnInit() {
		//estoy logueado?
		if (this.logIn.isSignIn()) {
			this.route.navigateByUrl('/user');
		}

		this.store.dispatch(setHomeActionStart());

		this.store.subscribe(stts => {
			this.selectedLanguage = stts.lngg.language;

			this.states.setState({
				selectedLanguage: this.selectedLanguage
			});

		});

		this.store.subscribe((stts: any) => {
			let nextData = stts.home.data;

			if (nextData.container || nextData.error) {
				if (nextData.code === 200) {
					this.loading = false;
					this.homeData = nextData.container;
				} else {
					this.generalError = true;
					this.generalErrorMsj = nextData.error.errorMsj;
				}
			}
		});
	}

	ngDoCheck() {

		this.states.getState().subscribe(
			(states: any) => {
				let lang = this.states.getSnapshot();
				debugger;
				/*if (states.prev.selectedLanguage !== "" && states.prev.selectedLanguage !== states.next.selectedLanguage) {
					this.store.dispatch(setHomeActionStart());
				}*/
			}
		);
	}
}
