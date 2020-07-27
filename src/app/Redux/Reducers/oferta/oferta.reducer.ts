import { Action, createReducer, on } from '@ngrx/store';
import * as OfertaAction from '../../Actions/oferta/oferta.action';
import { OfertaState } from '../../StateInterface/OfertaState';

export const initialState: OfertaState = {
    data: [],
    loader: true
};

const _ofertaReducer = createReducer(
    initialState,
    on(OfertaAction.setOfertaActionStart,
        (state: OfertaState) => {
            return {
                ...state,
                data: [],
                loader: true
            }
        }
    ),
    on(OfertaAction.setOfertaActionSuccess,
        (state: OfertaState, payload: OfertaState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    ),
    on(OfertaAction.setOfertaActionFail,
        (state: OfertaState, payload: OfertaState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    )
);

export function ofertaReducer(state: OfertaState | undefined, action: Action) {
    return _ofertaReducer(state, action);
}