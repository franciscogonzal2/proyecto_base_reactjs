import { createSelector } from '@ngrx/store';
import { AppState } from '../globalState';
import { LanguageState } from '../StateInterface/LanguageState';

export const languageStateSelector = (state: AppState) => state.lenguaje;

export const languageSelector = createSelector(
    languageStateSelector,
    (state: LanguageState) => state.lenguaje
);
