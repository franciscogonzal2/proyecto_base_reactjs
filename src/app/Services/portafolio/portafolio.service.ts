import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { SharedService } from '../../Services/shared/shared.service';
@Injectable()
export class PortafolioService {

  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private shared: SharedService
  ) { }

  getPortafolioData(tipo): Observable<portafolioDataInterface[]> {
    return this.http.get<portafolioDataInterface[]>(
      this.fn.getUrlToService("portafolio",
        this.shared.getSelectedLanguage()
      )).pipe(map((data) => {
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
    return this.http.get<portafolioDataInterface[]>(
      this.fn.getUrlToService("portafolio",
        this.shared.getSelectedLanguage()
      ));
  }

}

//Interface
export interface portafolioDataInterface {
  elementos: [
    {
      type: string;
      backgroundImage: string;
      imgTabs: string;
      titulo: string;
      subTitulo: string;
      item: [
        {
          tituloElements: string;
          imgElements: string;
          dateElements: string;
          urlElements: string;
        }
      ];
    }
  ];
}