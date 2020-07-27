import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { SharedService } from '../../Services/shared/shared.service';

@Injectable()
export class WebpacksService {

  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private shared: SharedService
  ) { }

  getWebPacksData(): Observable<webpacksDataInterface[]> {
    return this.http.get<webpacksDataInterface[]>(
      this.fn.getUrlToService("webpacks",
        this.shared.getSelectedLanguage()
      ));
  }

}

//Interfaces
export interface webpacksDataInterface {
  webpacksContent: {
    backgroundImage: string;
    titulo: string;
    subTitulo: string;
  };
  paquetes: [
    {
      id_pqt: string;
      nombre_pqt: string;
      titulo_detalle_pqt: string;
      precio_pqt: string;
      regular_text_pqt: string;
      regular_text_tachado_pqt: string;
      promociones: [
        {
          img_promo: string;
          titulo_promo: string;
          info_promo: string;
          descuento_promo: string;
          fecha_promo: string;
          validez_promo: string;
          text_btn_promo: string;
          url_btn_promo: string;
          titulo_terms: string;
          terms: string;
          errorMsj?: string;
        }
      ];
      beneficios: [
        {
          detalle1: string;
          detalle2: string;
          detalle3: string;
          detalle4: string;
          detalle5: string;
          detalle6: string;
          detalle7: string;
        }
      ];
      text_btn_pqt: string;
      url_btn_pqt: string;
    }
  ];
}