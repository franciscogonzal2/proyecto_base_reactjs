import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { SharedService } from '../../Services/shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private shared: SharedService
  ) { }

  getUserData(): Observable<userDataInterface[]> {
    return this.http.get<userDataInterface[]>(
      this.fn.getUrlToService("user",
        this.shared.getSelectedLanguage()
      ));
  }

}

//Interface
export interface userDataInterface {
  container: [
    {
      userContent: {
        backgroundImage: string;
        titulo: string;
        subTitulo: string;
      };
    }
  ];
  code: number;
  error: string;
}