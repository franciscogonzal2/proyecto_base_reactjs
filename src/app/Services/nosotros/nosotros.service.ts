import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { SharedService } from '../../Services/shared/shared.service';
@Injectable()
export class NosotrosService {

  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private shared: SharedService
  ) { }

  getNosotrosData(): Observable<nosotrosDataInterface[]> {
    return this.http.get<nosotrosDataInterface[]>(
      this.fn.getUrlToService("nosotros",
        this.shared.getSelectedLanguage()
      ));
  }

}

//Interface
export interface nosotrosDataInterface {
  container: [
    {
      nosotrosContent: {
        backgroundImage: string;
        titulo: string;
        subTitulo: string;
      };
      nosotrosElements: [
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


