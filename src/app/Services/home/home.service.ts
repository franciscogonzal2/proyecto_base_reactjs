import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../Redux/globalReducer';

@Injectable()
export class HomeService {
  selectedLanguage: string;
  
  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private store: Store<AppState>
  ) {}

  getHomeData(): Observable<homeDataInterface[]>{

    this.store.subscribe( stts => {
      this.selectedLanguage = stts.lngg.language;
    })

    return this.http.get<homeDataInterface[]>( this.fn.getUrlToService("home", this.selectedLanguage) );
  }
}

/*Interface*/
export interface homeDataInterface{
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
  }
  code: number;
  error: string;
}
