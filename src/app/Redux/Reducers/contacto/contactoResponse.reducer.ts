import { Action, createReducer, on } from '@ngrx/store';
import * as ContactoResponseAction from '../../Actions/contacto/contactoResponse.action';
import { ContactoResponseState } from '../../StateInterface/ContactoState';

export const initialState: ContactoResponseState = {
    response: []
};

const _contactoResponseReducer = createReducer(
    initialState,
    on(ContactoResponseAction.setContactoResponseActionStart,
        (state: ContactoResponseState) => {
            return {
                ...state,
                response: []
            }
        }
    ),
    on(ContactoResponseAction.setContactoResponseActionSuccess,
        (state: ContactoResponseState, payload: ContactoResponseState) => {
            return {
                ...state,
                response: payload.response
            }
        }
    ),
    on(ContactoResponseAction.setContactoResponseActionFail,
        (state: ContactoResponseState, payload: ContactoResponseState) => {
            return {
                ...state,
                response: payload.response
            }
        }
    )
);

export function contactoResponseReducer(state: ContactoResponseState | undefined, action: Action) {
    return _contactoResponseReducer(state, action);
}