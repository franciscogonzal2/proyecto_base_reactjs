import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { SharedService } from '../../Services/shared/shared.service';
@Injectable()
export class PortafolioService {

  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private shared: SharedService
  ) { }

  getPortafolioData(): Observable<portafolioDataInterface[]> {
    return this.http.get<portafolioDataInterface[]>(
      this.fn.getUrlToService("portafolio",
        this.shared.getSelectedLanguage()
      )
    );
  }
}

//Interface
export interface portafolioDataInterface {
  container: [
    {
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
  ];
  code: number;
  error: string;
}