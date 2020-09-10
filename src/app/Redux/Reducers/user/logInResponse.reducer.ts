import { Action, createReducer, on } from '@ngrx/store';
import * as LogInResponseAction from '../../Actions/user/logInResponse.action';
import { LogInResponseState } from '../../StateInterface/UserState';

export const initialState: LogInResponseState = {
    response: []
};

const _logInResponseReducer = createReducer(
    initialState,
    on(LogInResponseAction.setLogInResponseActionStart,
        (state: LogInResponseState) => {
            return {
                ...state,
                response: []
            }
        }
    ),
    on(LogInResponseAction.setLogInResponseActionSuccess,
        (state: LogInResponseState, payload:LogInResponseState) => {
            return {
                ...state,
                response: payload.response
            }
        }
    ),
    on(LogInResponseAction.setLogInResponseActionFail,
        (state: LogInResponseState, payload:LogInResponseState) => {
            return {
                ...state,
                response: payload.response
            }
        }
    )
);

export function logInResponseReducer(state: LogInResponseState | undefined, action: Action) {
    return _logInResponseReducer(state, action);
}