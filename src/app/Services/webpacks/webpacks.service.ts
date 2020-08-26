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
  container: [
    {
      webpacksContent: {
        backgroundImage: string;
        titulo: string;
        subTitulo: string;
        titulo_promocion: string;
        titulo_paquetes_web: string;
      };
      paquetes: [
        {
          id: number;
          nombre_paquete: string;
          titulo_detalle: string;
          precio_regular: number;
          regular_text: string;
          oferta_text: string;
          precio_regular_tachado: string;
          beneficios: [string];
          text_btn: string;
          url_btn: string;
          promo: [
            {
              codigo_promo: string;
              img_promo: string;
              titulo_promo: string;
              info_promo: string;
              info_extra_promo: string;
              descuento_promo: number;
              fecha_promo: string;
              fecha_inicio_promo: string;
              fecha_fin_promo: string;
              validez_promo: boolean;
              text_btn_promo: string;
              url_btn_promo: string;
              titulo_terms: string;
              terms: [string];
            }
          ]
        }
      ];
    }
  ];
  code: number;
  error: string;
}