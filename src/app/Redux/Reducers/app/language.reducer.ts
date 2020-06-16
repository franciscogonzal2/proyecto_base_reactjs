import { Action, createReducer, on } from '@ngrx/store';
import { setLanguageAction } from '../../Actions/app/language.action';
import * as StatesInterface from '../../globalStates.interface';

export const initialState: StatesInterface.LanguageState = {
    language: 'esp'
};

export const LanguageStateSelectorKey = 'LanguageStateSelector';

const _languageReducer = createReducer(
    initialState,
    on( setLanguageAction, 
        ( state: StatesInterface.LanguageState, payload: any ) => {
            return { ...state, language: payload.language  }
        }
    )
);

export function languageReducer(state: StatesInterface.LanguageState | undefined, action: Action) {
    return _languageReducer(state, action);
}