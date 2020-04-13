import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  createContactoData(bodyRequest): Observable<contactoDataResponseInterface[]> {
    
    /*let options =  {
        headers: new HttpHeaders(
        {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        })
    };

    return this.http.post<contactoDataResponseInterface[]>( 
      this.fn.getUrlToService("testCreateContacto"), 
      bodyRequest,
      { 
        ...options,
        responseType: 'json'
      }
    );*/
    

    const headers = new HttpHeaders(
      {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Content-Type': 'application/json; charset=UTF-8'
      }
    );
      
    return this.http.post<contactoDataResponseInterface[]>(
      this.fn.getUrlToService("testCreateContacto"),
      bodyRequest,
      {
        headers,
        responseType: 'json'
      }
    );
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