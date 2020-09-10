import { Action, createReducer, on } from '@ngrx/store';
import * as RegistroAction from '../../Actions/user/registro.action';
import { RegistroState } from '../../StateInterface/UserState';

export const initialState: RegistroState = {
    data: [],
    loader: true
};

const _registroReducer = createReducer(
    initialState,
    on(RegistroAction.setRegistroActionStart,
        (state: RegistroState) => {
            return {
                ...state,
                data: [],
                loader: true
            }
        }
    ),
    on(RegistroAction.setRegistroActionSuccess,
        (state: RegistroState, payload: RegistroState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    ),
    on(RegistroAction.setRegistroActionFail,
        (state: RegistroState, payload: RegistroState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    )
);

export function registroReducer(state: RegistroState | undefined, action: Action) {
    return _registroReducer(state, action);
}