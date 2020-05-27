import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { FuncionesService } from '../funciones/funciones.service';
import { CookieService } from 'ng2-cookies';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class LogInService {
  /*propiedades*/
  userToken: string;
  
  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private cookies: CookieService,
    private route: Router
  ){
    this.getToken();
  }

  getLogInData(): Observable<LogInDataInterface[]>{
    return this.http.get<LogInDataInterface[]>( this.fn.getUrlToService("logIn") );
  }

  logIn( formlogIn: FormGroup ): Observable<LogInDataResponseInterface[]>{
    const url: string = this.fn.getUrlToService("validateUser");
    const headers = new HttpHeaders(
      {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      }
    );
    
    return this.http.post<LogInDataResponseInterface[]>( 
      url,
      formlogIn, 
      { headers }
    ).pipe(
      map( resp => {
          this.setToken(resp[0].jwt, Number(resp[0].expireAt));
          return resp; 
        }
      ),
      catchError( err => this.fn.handleError(err))
    )
  }

  logOut(){
    this.cookies.delete("jwt",'/');
    this.cookies.delete("expire",'/');
    this.route.navigateByUrl('/home');
  }

  setToken( token: string, expireAt: number ){
    this.userToken = token;
    this.cookies.set("jwt", this.userToken);

    let hoy = new Date();
    hoy.setSeconds(expireAt);

    this.cookies.set("expire", hoy.getTime().toString() );
  }

  getToken(){
    const isToken = this.cookies.check("jwt");
    this.userToken = isToken ? this.cookies.get("jwt") : "";
    return this.userToken;
  }

  isSignIn(): boolean {

    if(this.userToken.length < 2){
      return false;
    }

    const currentDate = new Date;
    const expira = Number(this.cookies.get("expire"));
    const expiraDate = new Date;
    expiraDate.setTime(expira);

    return expiraDate > currentDate ? true : false // ese false se debe de validar tambien desde el backend
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
  url: string;
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
  title: string;
  message: string;
  http_response_code: number;
  jwt: string;
  expireAt: string;
}