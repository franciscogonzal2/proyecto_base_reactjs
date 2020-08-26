import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { SharedService } from '../../Services/shared/shared.service';

@Injectable()
export class ResponsiveService {

  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private shared: SharedService
  ) { }

  getResponsiveData(): Observable<responsiveDataInterface[]> {
    return this.http.get<responsiveDataInterface[]>(
      this.fn.getUrlToService("responsive",
        this.shared.getSelectedLanguage()
      ));
  }
}

//Interface
export interface responsiveDataInterface {
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