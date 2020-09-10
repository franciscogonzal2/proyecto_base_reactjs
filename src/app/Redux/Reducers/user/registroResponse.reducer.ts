import { Action, createReducer, on } from '@ngrx/store';
import * as RegistroResponseAction from '../../Actions/user/registroResponse.action';
import { RegistroResponseState } from '../../StateInterface/UserState';

export const initialState: RegistroResponseState = {
    response: []
};

const _registroResponseReducer = createReducer(
    initialState,
    on(RegistroResponseAction.setRegistroResponseActionStart,
        (state: RegistroResponseState) => {
            return {
                ...state,
                response: []
            }
        }
    ),
    on(RegistroResponseAction.setRegistroResponseActionSuccess,
        (state: RegistroResponseState, payload:RegistroResponseState) => {
            return {
                ...state,
                response: payload.response
            }
        }
    ),
    on(RegistroResponseAction.setRegistroResponseActionFail,
        (state: RegistroResponseState, payload:RegistroResponseState) => {
            return {
                ...state,
                response: payload.response
            }
        }
    )
);

export function registroResponseReducer(state: RegistroResponseState | undefined, action: Action) {
    return _registroResponseReducer(state, action);
}