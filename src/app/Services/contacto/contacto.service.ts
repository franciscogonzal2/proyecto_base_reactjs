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
  title: string;
  message: string;
  http_response_code: number
}