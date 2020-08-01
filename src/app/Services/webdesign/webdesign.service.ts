import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { SharedService } from '../../Services/shared/shared.service';

@Injectable()
export class WebdesignService {

  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private shared: SharedService
  ) { }

  getWebDesignData(): Observable<webDesignDataInterface[]> {
    return this.http.get<webDesignDataInterface[]>(
      this.fn.getUrlToService("webdesign",
        this.shared.getSelectedLanguage()
      ));
  }
}

//Interface
export interface webDesignDataInterface {
  container: {
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
  };
  code: number;
  error: string;
}