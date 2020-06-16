import { ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState, RouterStateSerializer } from "@ngrx/router-store";
import { environment } from '../../environments/environment';
import * as GlobalInterface from './globalStates.interface';
import { Params, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
//Reducers
import { languageReducer } from './Reducers/app/language.reducer';
import { homeReducer } from './Reducers/home/home.reducer';

//GLOBAL STATES
export interface AppState {
    lngg: GlobalInterface.LanguageState;
    home: GlobalInterface.HomeState
}

//GLOBAL REDUCERS
export const reducers: ActionReducerMap<AppState> = {
    lngg: languageReducer,
    home: homeReducer
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