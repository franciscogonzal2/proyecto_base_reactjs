import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';

@Injectable()
export class FooterService {

  constructor( private http: HttpClient, private fn: FuncionesService ) { }

  getFooterData(): Observable<footerDataInterface[]>{
    return this.http.get<footerDataInterface[]>( this.fn.getUrlToService("footer") );
  }

}

export interface Copy {
  logo: string;
  nombreEmpresa: string;
  disclaimer: string;
}

export interface Redes {
  url: string;
  icon: string;
  redesClass: string;
}

export interface Direccion {
  titulo: string;
  textos: string[];
}

export interface Enlaces {
  url: string;
  linkText: string;
}

export interface footerDataInterface {
  copy: Copy;
  redes: Redes[];
  direccion: Direccion[];
  enlaces: Enlaces[];
}
