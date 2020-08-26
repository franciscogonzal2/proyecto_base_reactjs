import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { SharedService } from '../../Services/shared/shared.service';

@Injectable()
export class OfertaService {

  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private shared: SharedService
  ) { }

  getOfertaData(): Observable<ofertaDataInterface[]> {
    return this.http.get<ofertaDataInterface[]>(
      this.fn.getUrlToService("oferta",
        this.shared.getSelectedLanguage()
      ));
  }

}

//Interface
export interface ofertaDataInterface {
  container: [
    {
      contenido: {
        backgroundImage: string;
        titulo: string;
        subTitulo: string;
      };
      elementos: [
        {
          tituloElements: string;
          imgElements: string;
          textElements: string;
        }
      ];
    }
  ];
  code: number;
  error: string;
}