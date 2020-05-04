import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FuncionesService } from '../funciones/funciones.service';
import { CookieService } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
   /*propiedades*/
   userToken: string;
   
   constructor(
     private http: HttpClient,
     private fn: FuncionesService,
     private cookies: CookieService
   ){
     this.getToken();
   }

  getNewUserData(): Observable<NewUserDataInterface[]>{
    return this.http.get<NewUserDataInterface[]>( this.fn.getUrlToService("newUser") );
  }

  createNewUser( formNewUser ): Observable<NewUserDataResponseInterface[]>{
    const url: string = this.fn.getUrlToService("createUser");
    const Headers = new HttpHeaders(
      {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        'Access-Control-Allow-Methods': 'POST',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Max-Age': '3600'
      }
    );
    return this.http.post<NewUserDataResponseInterface[]>(
      url,
      formNewUser,
      { headers: Headers, responseType: 'json' }
    ).pipe(
      map( resp => {
        this.setToken(resp['jwt'], resp['expireAt'] );
          return resp; 
        }
      ),
      catchError( err => this.fn.handleError(err))
    )
  }

  setToken( token: string, expireAt: number ){
    this.userToken = token;
    this.cookies.set("jwt", this.userToken);
  }

  getToken(){
    const isToken = this.cookies.check("jwt");
    this.userToken = isToken ? this.cookies.get("jwt") : "";
    return this.userToken;
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

export interface SignUp {
  label: string;
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
  signUp: SignUp;
}

export interface NewUserDataInterface {
  newUserContent: NewUserContent;
  formNewUser: FormNewUser;
}

//response data
export interface NewUserDataResponseInterface {
  message: string;
  http_response_code: number,
  jwt: string;
  expireAt: string;
}
