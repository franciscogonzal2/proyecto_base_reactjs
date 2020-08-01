import {Component, OnInit, Input } from '@angular/core';
import { CarruselService, carruselDataInterface } from '../../Services/carrusel/carrusel.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit{
  loading: boolean = true;
  rateLoading: number = 0;
  generalError: boolean = false;
	generalErrorMsj: string;
  //get data
  carruselData: carruselDataInterface[] = [];

  constructor(
    private carruselService: CarruselService
  ) {}

  ngOnInit() {
    this.carruselService.getCarruselData()
    .subscribe(
      (data: carruselDataInterface[]) =>{
        if (data["container"] || data["error"]) {
          if (data["code"] === 200) {
            this.carruselData = data["container"];
            this.rLoading();
            setTimeout(()=>{ this.loading = false;},1000);
          } else {
            this.generalError = true;
            this.generalErrorMsj = data["error"];
          }
        }
			},
			(error: any) => {
				this.generalError = true;
				this.generalErrorMsj = error.message;
		  }
    );
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