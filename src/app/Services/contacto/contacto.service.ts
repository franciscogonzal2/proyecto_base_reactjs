import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FuncionesService } from '../../Services/funciones/funciones.service';

@Injectable()
export class ContactoService {

  constructor(
    private http: HttpClient,
    private fn: FuncionesService
  ) { }

  getContactoData(): Observable<contactoDataInterface[]> {
    return this.http.get<contactoDataInterface[]>(this.fn.getUrlToService("contacto"));
  }

  createContactoData(bodyRequest: object): Observable<contactoDataResponseInterface[]> {
    const url: string = this.fn.getUrlToService("createContacto");
    const Headers = new HttpHeaders(
      {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        'Access-Control-Allow-Methods': 'POST',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Max-Age': '3600'
      }
    );

    return this.http.post<contactoDataResponseInterface[]>( 
      url,
      bodyRequest,
      { headers: Headers, responseType: 'json' }
      ).pipe(
          catchError( err => this.fn.handleError(err))
        )
  }
}

export interface WebpacksContent {
  backgroundImage: string;
  titulo: string;
  subTitulo: string;
}

export interface LeftSection {
  imgSection: string;
  titulo: string;
  texto1: string;
  texto2: string;
  texto3: string;
}

export interface InputName {
  placeholder: string;
  required_text: string;
}

export interface InputEmail {
  placeholder: string;
  required_text: string;
  wrong_text: string;
}

export interface InputTel {
  placeholder: string;
  required_text: string;
  wrong_text: string;
}

export interface InputMensaje {
  placeholder: string;
  required_text: string;
}

export interface FormContacto {
  titulo: string;
  ok_icon: string;
  error_icon: string;
  save_button: string;
  cancel_button: string;
  reset_button: string;
  inputName: InputName;
  inputEmail: InputEmail;
  inputTel: InputTel;
  inputMensaje: InputMensaje;
}

export interface contactoDataInterface {
  webpacksContent: WebpacksContent;
  leftSection: LeftSection;
  formContacto: FormContacto;
}

//response data
export interface contactoDataResponseInterface {
  message: string;
  http_response_code: number
}