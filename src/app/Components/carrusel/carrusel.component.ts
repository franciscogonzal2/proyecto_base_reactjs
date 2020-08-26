import {Component, OnInit, DoCheck } from '@angular/core';
import { carruselDataInterface } from '../../Services/carrusel/carrusel.service';
import { AppState } from '../../Redux/globalState';
import { Store } from '@ngrx/store';
import { setCarruselActionStart } from 'src/app/Redux/Actions/carrusel/carrusel.action';
import { SharedService } from '../../Services/shared/shared.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit, DoCheck{
  loading: boolean = true;
  rateLoading: number = 0;
  generalError: boolean = false;
	generalErrorMsj: string;
  //get data
  carruselData: carruselDataInterface[] = [];
  oldLang: string = "";

  constructor(
    private store: Store<AppState>,
		private shared: SharedService,
  ) {
    /*this.store.subscribe((stts: any) => {
		  this.loading = stts.carrusel.loader;
		});*/
  }

  ngOnInit() {
    this.store.dispatch(setCarruselActionStart());

		this.store.subscribe((stts: any) => {
			let carruselDataAux = stts.carrusel.data;
			//let loaderAux = stts.carrusel.loader;

			if (carruselDataAux.container || carruselDataAux.error) {
				if (carruselDataAux.code === 200) {
					//this.loading = loaderAux;
					this.carruselData = carruselDataAux.container;
				} else {
					this.generalError = true;
					this.generalErrorMsj = carruselDataAux.error.errorMsj;
				}
			}
		});
  }

  ngDoCheck() {
		/*Cambio de idioma*/
		if (this.oldLang === "") {
			this.oldLang = this.shared.getSelectedLanguage();
		}

		if (this.oldLang !== "" && this.shared.getSelectedLanguage() !== this.oldLang) {
			this.oldLang = this.shared.getSelectedLanguage();
			this.store.dispatch(setCarruselActionStart());
		}
	}

  rLoading(){
   for(let i=1; i <= 100; i++ ){
    this.rateLoading = this.rateLoading + 1;
   }
  }

  activeClass(i: number){
    let activeArrayClases = [
      "carousel-item",
      "carousel-fade",
       i == 0 ? "active" : ""
    ];
    return activeArrayClases;
  }
  
  animateClass(i: number){
    let animationArrayClases = [
      "carousel-caption",
      "text-left",
      "animated",
       i == 0 ? "bounceInUp" : ""
    ];
    return animationArrayClases;
  }
  
}