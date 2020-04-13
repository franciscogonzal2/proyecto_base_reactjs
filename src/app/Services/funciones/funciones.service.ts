import { Injectable } from '@angular/core';

@Injectable()
export class FuncionesService {

  constructor() {}

  //Glabal Url
  getUrlToService(val: string){
    const globalUrl = "http://www.desistemasweb.com/backend/";

    const serviceUrl = {
      carrusel: `${globalUrl}carrusel/carrusel.php`,
      contacto: `${globalUrl}contacto/contacto.php`,
      createContacto: `${globalUrl}contacto/createContacto.php`,
      footer: `${globalUrl}footer/footer.php`,
      home: `${globalUrl}home/home.php`,
      nosotros: `${globalUrl}nosotros/nosotros.php`,
      oferta: `${globalUrl}oferta/oferta.php`,
      webpacks: `${globalUrl}webPacks/webpacks.php`,
      portafolio: `${globalUrl}portafolio/portafolio.php`,
      responsive: `${globalUrl}responsive/responsive.php`,
      webdesign: `${globalUrl}webDesign/webdesign.php`,
      logIn: `${globalUrl}authorization/authorization.php`,
      createUser: `${globalUrl}authorization/createContacto.php`,
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

}
