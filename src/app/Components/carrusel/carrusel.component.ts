import {Component, OnInit } from '@angular/core';
import { CarruselService, carruselDataInterface } from '../../Services/carrusel/carrusel.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit{
  loading: boolean = true;
  generalError: boolean = false;
	generalErrorMsj: string;
  //get data
  carruselData: carruselDataInterface[] = [];

  constructor( private carruselService: CarruselService ) {}

  ngOnInit() {
    this.carruselService.getCarruselData()
    .subscribe(
      (data: carruselDataInterface[]) =>{
        this.carruselData = data;
        this.loading = false;
			},
			(error: any) => {
				this.generalError = true;
				this.generalErrorMsj = error.message;
		  }
    );
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