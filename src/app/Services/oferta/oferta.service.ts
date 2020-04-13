import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';

@Injectable()
export class OfertaService {

  constructor( private http: HttpClient, private fn: FuncionesService ) {}

  getOfertaData(): Observable<ofertaDataInterface[]>{
    return this.http.get<ofertaDataInterface[]>( this.fn.getUrlToService("oferta") );
  }

}

export interface ofertaContent {
  backgroundImage: string;
  titulo: string;
  subTitulo: string;
}

export interface ofertaElements {
  tituloElements: string;
  imgElements: string;
  textElements: string;
}

export interface ofertaDataInterface {
  contenido: ofertaContent;
  elementos: ofertaElements[];
}