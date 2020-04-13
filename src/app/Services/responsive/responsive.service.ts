import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';

@Injectable()
export class ResponsiveService {

  constructor( private http: HttpClient, private fn: FuncionesService ) {}

  getResponsiveData(): Observable<responsiveDataInterface[]>{
    return this.http.get<responsiveDataInterface[]>( this.fn.getUrlToService("responsive") );
  }

}

export interface responsiveContent {
  backgroundImage: string;
  titulo: string;
  subTitulo: string;
}

export interface responsiveElements {
  tituloElements: string;
  imgElements: string;
  textElements: string;
}

export interface responsiveDataInterface {
  contenido: responsiveContent;
  elementos: responsiveElements[];
}