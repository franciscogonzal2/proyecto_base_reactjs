import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { SharedService } from '../../Services/shared/shared.service';

@Injectable()
export class CarruselService {

  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private shared: SharedService
  ) { }

  getCarruselData(): Observable<carruselDataInterface[]> {
    return this.http.get<carruselDataInterface[]>(
      this.fn.getUrlToService("carrusel",
        this.shared.getSelectedLanguage()
      )
    );
  }
}

export interface carruselDataInterface {
  container: [
    {
      sliderUrl: string,
      tituloSlider: string,
      subTituloSlider: string,
      subTituloTextSlider: string,
      botonSliderdUrl: string,
      botonSliderdText: string
    }
  ];
  code: number;
  error: string;
}

