import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as GlobalInterface from '../globalStates.interface';
import { LanguageStateSelectorKey } from '../Reducers/app/language.reducer';

export const LanguageStateSelector = createFeatureSelector<GlobalInterface.LanguageState>(
    LanguageStateSelectorKey 
);

export const LanguageSelector = createSelector(
    LanguageStateSelector,
    (state: GlobalInterface.LanguageState) => state.language
);


