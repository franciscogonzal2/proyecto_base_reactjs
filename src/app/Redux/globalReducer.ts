import { ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from '../../environments/environment';

//StateInterface
import { LanguageState } from './StateInterface/LanguageState';
import { HomeState } from './StateInterface/HomeState';
import { NosotrosState } from './StateInterface/NosotrosState';
import { OfertaState } from './StateInterface/OfertaState';
import { ContactoState } from './StateInterface/ContactoState';
import { ContactoResponseState } from './StateInterface/ContactoState';
//Reducers
import { languageReducer } from './Reducers/app/language.reducer';
import { homeReducer } from './Reducers/home/home.reducer';
import { nosotrosReducer } from './Reducers/nosotros/nosotros.reducer';
import { ofertaReducer } from './Reducers/oferta/oferta.reducer';
import { contactoReducer } from './Reducers/contacto/contacto.reducer';
import { contactoResponseReducer } from './Reducers/contacto/contactoResponse.reducer';
//?
//import { RouterReducerState, RouterStateSerializer } from "@ngrx/router-store";
//import { Params, RouterStateSnapshot } from "@angular/router";
//import { Injectable } from "@angular/core";

//GLOBAL STATES
export interface AppState {
    lenguaje: LanguageState;
    home: HomeState;
    nosotros: NosotrosState;
    oferta: OfertaState;
    contacto: ContactoState;
    contactoResponse: ContactoResponseState;
}

//GLOBAL REDUCERS
export const reducers: ActionReducerMap<AppState> = {
    lenguaje: languageReducer,
    home: homeReducer,
    nosotros: nosotrosReducer,
    oferta: ofertaReducer,
    contacto: contactoReducer,
    contactoResponse: contactoResponseReducer
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