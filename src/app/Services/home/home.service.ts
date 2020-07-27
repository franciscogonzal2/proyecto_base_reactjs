import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { SharedService } from '../../Services/shared/shared.service';

@Injectable()
export class HomeService {

  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private shared: SharedService
  ) { }

  getHomeData(): Observable<homeDataInterface[]> {
    return this.http.get<homeDataInterface[]>(
      this.fn.getUrlToService("home",
        this.shared.getSelectedLanguage()
      )
    );
  }
}

/*Interface*/
export interface homeDataInterface {
  container: {
    homeHeader: {
      titulo: string;
      subTitulo: string;
    };
    itemCard: [
      {
        imgCardUrl: string;
        imgCardAlt: string;
        tituloCard: string;
        contentCard: string;
        botonCardUrl: string;
        botonCardText: string;
      }
    ];
    comunicate: {
      imgComunicateUrl: string;
      imgComunicateAlt: string;
      tituloComunicate: string;
      contentComunicate: string;
      botonComunicatedUrl: string;
      botonComunicateText: string;
    };
  };
  code: number;
  error: string;
}
