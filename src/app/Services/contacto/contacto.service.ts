import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { SharedService } from '../../Services/shared/shared.service';
@Injectable()
export class ContactoService {

  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private shared: SharedService
  ) { }

  getContactoData(): Observable<contactoDataInterface[]> {
    return this.http.get<contactoDataInterface[]>(
      this.fn.getUrlToService("contacto",
        this.shared.getSelectedLanguage()
      ));
  }

  createContactoData(bodyRequest: object): Observable<contactoDataResponseInterface[]> {
    const url: string = this.fn.getUrlToService("createContacto",
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

    return this.http.post<contactoDataResponseInterface[]>(
      url,
      bodyRequest,
      { headers }
    ).pipe(
      catchError(err => this.fn.handleError(err))
    )
  }
}

//Interfaces
export interface contactoDataInterface {
  container: {
    webpacksContent: {
      backgroundImage: string;
      titulo: string;
      subTitulo: string;
    };
    leftSection: {
      imgSection: string;
      titulo: string;
      texto1: string;
      texto2: string;
      texto3: string;
    };
    formContacto: {
      titulo: string;
      ok_icon: string;
      error_icon: string;
      save_button: string;
      cancel_button: string;
      reset_button: string;
      inputName: {
        placeholder: string;
        required_text: string;
      };
      inputEmail: {
        placeholder: string;
        required_text: string;
        wrong_text: string;
      };
      inputTel: {
        placeholder: string;
        required_text: string;
        wrong_text: string;
      };
      inputMensaje: {
        placeholder: string;
        required_text: string;
      };
    };
  };
  code: number;
  error: string;
}

//response data
export interface contactoDataResponseInterface {
  container: {
    title: string;
    message: string;
    http_response_code: number
  };
  code: number;
  error: string;
}