import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FuncionesService } from '../funciones/funciones.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {   
   constructor(
     private http: HttpClient,
     private fn: FuncionesService
   ){}

  getNewUserData(): Observable<NewUserDataInterface[]>{
    return this.http.get<NewUserDataInterface[]>( this.fn.getUrlToService("newUser") );
  }

  createNewUser( formNewUser ): Observable<NewUserDataResponseInterface[]>{
    const url: string = this.fn.getUrlToService("createUser");
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
      catchError( err => this.fn.handleError(err))
    )
  }
}

export interface NewUserContent {
  backgroundImage: string;
  titulo: string;
  subTitulo: string;
}

export interface InputEmail {
  placeholder: string;
  required_text: string;
  wrong_text: string;
}

export interface InputPassword {
  placeholder: string;
  required_text: string;
}
export interface InputPassword2 {
  placeholder: string;
  required_text: string;
  notSame_text: string;
}

export interface InputNickName {
  placeholder: string;
  required_text: string;
  wrong_text: string;
}

export interface InputFirstName {
  placeholder: string;
  required_text: string;
  wrong_text: string;
}

export interface InputLastName {
  placeholder: string;
  required_text: string;
  wrong_text: string;
}

export interface CheckboxRememberMe {
  label: string;
}

export interface logIn {
  label: string;
  url: string;
}

export interface FormNewUser {
  titulo: string;
  ok_icon: string;
  error_icon: string;
  inputEmail: InputEmail;
  inputPassword: InputPassword;
  inputPassword2: InputPassword2;
  inputNickName: InputNickName;
  inputFirstkName: InputFirstName;
  inputLastName: InputLastName;
  checkboxRememberMe: CheckboxRememberMe;
  logIn: logIn;
}

export interface NewUserDataInterface {
  newUserContent: NewUserContent;
  formNewUser: FormNewUser;
}

//response data
export interface NewUserDataResponseInterface {
  title: string;
  message: string;
  http_response_code: number,
  jwt: string;
  expireAt: string;
}
