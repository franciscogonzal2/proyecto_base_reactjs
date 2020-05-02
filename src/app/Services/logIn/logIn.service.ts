import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { FuncionesService } from '../funciones/funciones.service';
import { CookieService } from 'ng2-cookies';
import { FormGroup } from '@angular/forms';

@Injectable()
export class LogInService {
  /*propiedades*/
  userToken: string;
  
  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private cookies: CookieService
  ){
    this.getToken();
  }

  getLogInData(): Observable<LogInDataInterface[]>{
    return this.http.get<LogInDataInterface[]>( this.fn.getUrlToService("logIn") );
  }

  logIn( formlogIn: FormGroup ): Observable<LogInDataResponseInterface[]>{
    const url: string = this.fn.getUrlToService("validateUser");
    const Headers = new HttpHeaders(
      {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        'Access-Control-Allow-Methods': 'POST',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Max-Age': '3600'
      }
    );
    
    return this.http.post<LogInDataResponseInterface[]>( 
      url,
      formlogIn, 
      { headers: Headers, responseType: 'json' }
    ).pipe(
      map( resp => {
          this.setToken(resp['jwt']);
          return resp; 
        }
      ),
      retry(3),
      catchError( err => this.fn.handleError(err))
    )
  }

  logOut(){
    this.cookies.delete("jwt",'/')
  }

  setToken( token: string ){
    this.userToken = token;
    this.cookies.set("jwt", this.userToken);
  }

  getToken(){
    const isToken = this.cookies.check("jwt");
    this.userToken = isToken ? this.cookies.get("jwt") : "";
    return this.userToken;
  }

}

export interface LogInContent {
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

export interface CheckboxRememberMe {
  label: string;
}

export interface SignUp {
  label: string;
}

export interface FormLogIn {
  ok_icon: string;
  error_icon: string;
  save_button: string;
  inputEmail: InputEmail;
  inputPassword: InputPassword;
  checkboxRememberMe: CheckboxRememberMe;
  signUp: SignUp;
}

export interface LogInDataInterface {
  logInContent: LogInContent;
  formLogIn: FormLogIn;
}

//response data
export interface LogInDataResponseInterface {
  message: string;
  http_response_code: number;
  jwt: string;
  expireAt: string;
}