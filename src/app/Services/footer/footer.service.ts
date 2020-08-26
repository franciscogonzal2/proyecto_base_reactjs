import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { SharedService } from '../../Services/shared/shared.service';

@Injectable()
export class FooterService {

  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private shared: SharedService
  ) { }

  getFooterData(): Observable<footerDataInterface[]> {
    return this.http.get<footerDataInterface[]>(
      this.fn.getUrlToService("footer",
        this.shared.getSelectedLanguage()
      )
    );
  }

}

//Interface
export interface footerDataInterface {
  container: [
    {
      copy: {
        logo: string;
        nombreEmpresa: string;
        disclaimer: string;
      };
      redes: [
        {
          url: string;
          icon: string;
          redesClass: string;
        }
      ];
      direccion: [
        {
          titulo: string;
          textos: [
            string
          ];
        }
      ];
      enlaces: [
        {
          url: string;
          linkText: string;
        }
      ];
    }
  ];
  code: number;
  error: string;
}
