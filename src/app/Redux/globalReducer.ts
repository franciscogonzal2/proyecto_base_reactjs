import { ActionReducerMap, MetaReducer /*, createFeatureSelector, createSelector*/ } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState } from './globalState';

//All Reducers
import { languageReducer } from './Reducers/app/language.reducer';
import { homeReducer } from './Reducers/home/home.reducer';
import { nosotrosReducer } from './Reducers/nosotros/nosotros.reducer';
import { ofertaReducer } from './Reducers/oferta/oferta.reducer';
import { contactoReducer } from './Reducers/contacto/contacto.reducer';
import { contactoResponseReducer } from './Reducers/contacto/contactoResponse.reducer';
import { portafolioReducer } from './Reducers/portafolio/portafolio.reducer';
import { webDesignReducer } from './Reducers/webdesign/webdesign.reducer';
import { responsiveReducer } from './Reducers/responsive/responsive.reducer';
import { webPacksReducer } from './Reducers/webpacks/webpacks.reducer';
import { footerReducer } from './Reducers/footer/footer.reducer';
import { carruselReducer } from './Reducers/carrusel/carrusel.reducer';
import { logInReducer } from './Reducers/user/logIn.reducer';
import { logInResponseReducer } from './Reducers/user/logInResponse.reducer';
import { registroReducer } from './Reducers/user/registro.reducer';
import { registroResponseReducer } from './Reducers/user/registroResponse.reducer';
import { userReducer } from './Reducers/user/user.reducer';

//?
//import { RouterReducerState, RouterStateSerializer } from "@ngrx/router-store";
//import { Params, RouterStateSnapshot } from "@angular/router";
//import { Injectable } from "@angular/core";

//GLOBAL REDUCERS
export const reducers: ActionReducerMap<AppState> = {
    lenguaje: languageReducer,
    home: homeReducer,
    nosotros: nosotrosReducer,
    oferta: ofertaReducer,
    contacto: contactoReducer,
    contactoResponse: contactoResponseReducer,
    portafolio: portafolioReducer,
    webdesign: webDesignReducer,
    responsive: responsiveReducer,
    webpacks: webPacksReducer,
    footer: footerReducer,
    carrusel: carruselReducer,
    logIn: logInReducer,
    logInResponse: logInResponseReducer,
    registro: registroReducer,
    registroResponse: registroResponseReducer,
    user: userReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];

/*export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

// Reducer selectors
export const selectReducerState = createFeatureSelector< RouterReducerState<RouterStateUrl> >("router");
export const getRouterInfo = createSelector(
  selectReducerState,
  state => state.state
);*/