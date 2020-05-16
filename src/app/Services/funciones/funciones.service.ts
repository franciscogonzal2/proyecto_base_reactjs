import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable()
export class FuncionesService {

  constructor() {}

  //Glabal Url
  getUrlToService(val: string){
    const globalUrl = environment.globalUrl;
    const serviceUrl = {
      carrusel: `${globalUrl}/carrusel/carrusel.php`,
      contacto: `${globalUrl}/contacto/contacto.php`,
      createContacto: `${globalUrl}/contacto/createContacto.php`,
      footer: `${globalUrl}/footer/footer.php`,
      home: `${globalUrl}/home/home.php`,
      nosotros: `${globalUrl}/nosotros/nosotros.php`,
      oferta: `${globalUrl}/oferta/oferta.php`,
      webpacks: `${globalUrl}/webPacks/webpacks.php`,
      portafolio: `${globalUrl}/portafolio/portafolio.php`,
      responsive: `${globalUrl}/responsive/responsive.php`,
      webdesign: `${globalUrl}/webDesign/webdesign.php`,
      logIn: `${globalUrl}/users/logIn.php`,
      validateUser: `${globalUrl}/users/validateUser.php`,
      newUser: `${globalUrl}/users/newUser.php`,
      createUser: `${globalUrl}/users/createUser.php`
    }

    return serviceUrl[val];
  }

  setLocalStorage(itemName: string, itemData: any){
    localStorage.setItem(itemName, itemData);
  }

  getLocalStorage(itemName: string){
    return localStorage.getItem(itemName);
  }

  //generar codigos Hash
  generateHash(length: number, difficult: string){
    let d = new Date().valueOf();
    let n = d.toString();
    let result = '';
    let p = 0;
    let chars;

    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialChar = "#$%&*";

    switch(difficult){
      case "A" : chars = letters; break;
      case "B" : chars = letters + numbers; break;
      case "C" : chars = letters + numbers + specialChar; break;
      default : chars = letters; break;
    }
  
    for (let i = length; i > 0; --i){
      result += ((i & 1) && n.charAt(p) ? n.charAt(p): chars[Math.floor(Math.random() * chars.length)]);
      if(i & 1) p++;
    };
    return result;
  }

  checkClassError(code:number){
    let alertFlag: string = "";
    let errorClass: Array<any>;

		switch(code){
			case 200:
			case 201: alertFlag = "alert-success"; break;
			case 400: alertFlag = "alert-warning"; break;
			case 204:
			case 503: alertFlag = "alert-danger"; break;
			default: alertFlag = "alert-danger"; break;
		}

		errorClass = [
			"alert",
			"alert-success",
			"alert-dismissible",
			"fade",
			"show",
			"alertWrapper",
			alertFlag
    ];
    
    return errorClass;
  }



  handleError(error: HttpErrorResponse) {
    let ERROR: string;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      ERROR = 'An error occurred:', error.error.message;
      //console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      ERROR = `Backend returned code ${error.status}, ` + `body was: ${error.error}`;
      //console.error( `Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('<strong>Algo malo a pasado, por favor intente mas tarde.</strong><br />' + ERROR);
  };

}
