import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';

@Injectable()
export class NosotrosService {

  constructor( private http: HttpClient, private fn: FuncionesService ) {}

  getNosotrosData(): Observable<nosotrosDataInterface[]>{
    return this.http.get<nosotrosDataInterface[]>( this.fn.getUrlToService("nosotros") );
  }

}

export interface nosotrosContent{
  backgroundImage: string;
  titulo: string;
  subTitulo: string;
}

export interface nosotrosElements{
  tituloElements: string;
  imgElements: string;
  textElements: string;
}

export interface nosotrosDataInterface {
  nosotrosContent: nosotrosContent;
  nosotrosElements: nosotrosElements[];
}