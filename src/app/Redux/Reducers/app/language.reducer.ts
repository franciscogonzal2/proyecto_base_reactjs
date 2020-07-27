import { Action, createReducer, on } from '@ngrx/store';
import { setLanguageAction } from '../../Actions/app/language.action';
import { LanguageState } from '../../StateInterface/LanguageState';

export const initialState: LanguageState = {
    lenguaje: 'esp'
};

const _languageReducer = createReducer(
    initialState,
    on( setLanguageAction, 
        ( state: LanguageState, payload: any ) => {
            return { ...state, lenguaje: payload.lenguaje  }
        }
    )
);

export function languageReducer(state: LanguageState | undefined, action: Action) {
    return _languageReducer(state, action);
}


