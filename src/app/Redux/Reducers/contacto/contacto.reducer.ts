import { Action, createReducer, on } from '@ngrx/store';
import * as ContactoAction from '../../Actions/contacto/contacto.action';
import { ContactoState } from '../../StateInterface/ContactoState';

export const initialState: ContactoState = {
    data: [],
    loader: true
};

const _contactoReducer = createReducer(
    initialState,
    on(ContactoAction.setContactoActionStart,
        (state: ContactoState) => {
            return {
                ...state,
                data: [],
                loader: true
            }
        }
    ),
    on(ContactoAction.setContactoActionSuccess,
        (state: ContactoState, payload: ContactoState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    ),
    on(ContactoAction.setContactoActionFail,
        (state: ContactoState, payload: ContactoState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    )
);

export function contactoReducer(state: ContactoState | undefined, action: Action) {
    return _contactoReducer(state, action);
}