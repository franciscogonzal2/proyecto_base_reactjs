import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { CookieService } from 'ng2-cookies';

@Injectable()
export class AuthService {
  /*propiedades*/
  userToken: string;
  headers = new HttpHeaders(
    {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Content-Type': 'application/json; charset=UTF-8'
    }
  );
  
  constructor(
    private http: HttpClient,
    private fn: FuncionesService,
    private cookies: CookieService
  ){
    this.getToken();
  }
 
  logIn( formlogIn ){
    this.cookies.set("jwt","hola mundo");
    return this.http.post(
      this.fn.getUrlToService("logIn"),
      formlogIn,
      {
        ...this.headers,
        responseType: 'json'
      }
    ).pipe(
      map( resp => {
        this.setToken(resp['jwt']); //vendrá del servicio
        return resp; 
        }
      )
    )

  }

  createNewUser( formNewUser ){
    return this.http.post(
      this.fn.getUrlToService("createUser"),
      formNewUser,
      {
        ...this.headers,
        responseType: 'json'
      }
    ).pipe(
      map( resp => {
        this.setToken(resp['jwt']); //
        return resp; 
        }
      )
    )
  }

  logOut(){
    this.cookies.delete("jwt",'/')
  }

  setToken( token: string ){
    this.userToken = "noData";//token;
    this.cookies.set("jwt", this.userToken);
  }

  getToken(){
    const isToken = this.cookies.check("jwt");
    this.userToken = isToken ? this.cookies.get("jwt") : "";
    return this.userToken;
  }

}