import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FuncionesService } from '../../Services/funciones/funciones.service';

@Injectable()
export class PortafolioService {

  constructor(private http: HttpClient, private fn: FuncionesService) { }

  getPortafolioData(tipo): Observable<portafolioDataInterface[]> {
    return this.http.get<portafolioDataInterface[]>(this.fn.getUrlToService("portafolio"))
      .pipe(map((data) => {
        let transformData = [];
        switch (tipo) {
          case "web": transformData.push(data['elementos'][0]); break;
          case "logo": transformData.push(data['elementos'][1]); break;
          case "design": transformData.push(data['elementos'][2]); break;
          default: transformData.push(data['elementos'][0]); break;
        }
        return transformData;
      })
      )
  }

  getPortafolioAllData(): Observable<portafolioDataInterface[]> {
    return this.http.get<portafolioDataInterface[]>(this.fn.getUrlToService("portafolio"));
  }

}

export interface items {
  tituloElements: string;
  imgElements: string;
  dateElements: string;
  urlElements: string;
}

export interface portafolioElements {
  type: string;
  backgroundImage: string;
  imgTabs: string;
  titulo: string;
  subTitulo: string;
  item: items[];
}

export interface portafolioDataInterface {
  elementos: portafolioElements[];
}