import { createSelector } from '@ngrx/store';
import * as GlobalReducer from '../globalReducer';
import { LanguageState } from '../StateInterface/LanguageState';

export const languageStateSelector = (state: GlobalReducer.AppState) => state.lenguaje;

export const languageSelector = createSelector(
    languageStateSelector,
    (state: LanguageState) => state.lenguaje
);
