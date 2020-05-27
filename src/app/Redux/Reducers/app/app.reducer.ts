import { Action, createReducer, on } from '@ngrx/store';
import { setLanguageAction } from '../../Actions/app/app.action';

export interface State {
    language: string;
  }

export const initialState: State = {
    language: 'esp'
};

const _appReducer = createReducer(initialState,
    on(
        setLanguageAction,
        state => (
            { 
                ...state, 
                language: state.language
            }
        )
    ),
);

export function appReducer(state: State | undefined, action: Action) {
    return _appReducer(state, action);
}