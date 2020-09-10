import { Action, createReducer, on } from '@ngrx/store';
import * as LogInAction from '../../Actions/user/logIn.action';
import { LogInState } from '../../StateInterface/UserState';

export const initialState: LogInState = {
    data: [],
    loader: true
};

const _logInReducer = createReducer(
    initialState,
    on(LogInAction.setLogInActionStart,
        (state: LogInState) => {
            return {
                ...state,
                data: [],
                loader: true
            }
        }
    ),
    on(LogInAction.setLogInActionSuccess,
        (state: LogInState, payload: LogInState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    ),
    on(LogInAction.setLogInActionFail,
        (state: LogInState, payload: LogInState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    )
);

export function logInReducer(state: LogInState | undefined, action: Action) {
    return _logInReducer(state, action);
}