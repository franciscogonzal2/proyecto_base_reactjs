import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';

@Injectable()
export class HomeService {
  constructor(
    private http: HttpClient,
    private fn: FuncionesService
  ) {}

  getHomeData(): Observable<homeDataInterface[]>{
    return this.http.get<homeDataInterface[]>( this.fn.getUrlToService("home") );
  }
}

/*Interface*/
export interface HomeContent {
  titulo: string;
  subTitulo: string;
}

export interface ItemCard {
  imgCardUrl: string;
  imgCardAlt: string;
  tituloCard: string;
  contentCard: string;
  botonCardUrl: string;
  botonCardText: string;
}

export interface Comunicate {
  imgComunicateUrl: string;
  imgComunicateAlt: string;
  tituloComunicate: string;
  contentComunicate: string;
  botonComunicatedUrl: string;
  botonComunicateText: string;
}

export interface homeDataInterface{
  homeContent: HomeContent;
  itemCard: ItemCard[];
  comunicate: Comunicate;
}
