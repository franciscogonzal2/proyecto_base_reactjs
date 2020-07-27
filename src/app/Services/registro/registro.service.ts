import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FuncionesService } from '../funciones/funciones.service';
import { SharedService } from '../../Services/shared/shared.service';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private shared: SharedService
  ) { }

  getNewUserData(): Observable<NewUserDataInterface[]> {
    return this.http.get<NewUserDataInterface[]>(
      this.fn.getUrlToService("newUser",
        this.shared.getSelectedLanguage()
      ));
  }

  createNewUser(formNewUser): Observable<NewUserDataResponseInterface[]> {
    const url: string = this.fn.getUrlToService("createUser",
      this.shared.getSelectedLanguage()
    );

    const headers = new HttpHeaders(
      {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      }
    );

    return this.http.post<NewUserDataResponseInterface[]>(
      url,
      formNewUser,
      { headers }
    ).pipe(
      catchError(err => this.fn.handleError(err))
    )
  }
}

//Interface
export interface NewUserDataInterface {
  newUserContent: {
    backgroundImage: string;
    titulo: string;
    subTitulo: string;
  };
  formNewUser: {
    titulo: string;
    ok_icon: string;
    error_icon: string;
    inputEmail: {
      placeholder: string;
      required_text: string;
      wrong_text: string;
    };
    inputPassword: {
      placeholder: string;
      required_text: string;
    };
    inputPassword2: {
      placeholder: string;
      required_text: string;
      notSame_text: string;
    };
    inputNickName: {
      placeholder: string;
      required_text: string;
      wrong_text: string;
    };
    inputFirstkName: {
      placeholder: string;
      required_text: string;
      wrong_text: string;
    };
    inputLastName: {
      placeholder: string;
      required_text: string;
      wrong_text: string;
    };
    checkboxRememberMe: {
      label: string;
    };
    logIn: {
      label: string;
      url: string;
    };
  };
}

//response data
export interface NewUserDataResponseInterface {
  title: string;
  message: string;
  http_response_code: number,
  jwt: string;
  expireAt: string;
}
