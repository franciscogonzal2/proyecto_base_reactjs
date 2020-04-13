import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';

@Injectable()
export class WebdesignService {

  constructor( private http: HttpClient, private fn: FuncionesService ) {}

  getWebDesignData(): Observable<webDesignDataInterface[]>{
    return this.http.get<webDesignDataInterface[]>( this.fn.getUrlToService("webdesign") );
  }

}

export interface webDesignContent {
  backgroundImage: string;
  titulo: string;
  subTitulo: string;
}

export interface webDesignElements {
  tituloElements: string;
  imgElements: string;
  textElements: string;
}

export interface webDesignDataInterface {
  contenido: webDesignContent;
  elementos: webDesignElements[];
}