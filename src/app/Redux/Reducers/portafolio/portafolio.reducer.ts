import { Action, createReducer, on } from '@ngrx/store';
import * as PortafolioAction from '../../Actions/portafolio/portafolio.action';
import { PortafolioState } from '../../StateInterface/PortafolioState';

export const initialState: PortafolioState = {
    data: [],
    loader: true
};

const _portafolioReducer = createReducer(
    initialState,
    on(PortafolioAction.setPortafolioActionStart,
        (state: PortafolioState) => {
            return {
                ...state,
                data: [],
                loader: true
            }
        }
    ),
    on(PortafolioAction.setPortafolioActionSuccess,
        (state: PortafolioState, payload: PortafolioState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    ),
    on(PortafolioAction.setPortafolioActionFail,
        (state: PortafolioState, payload: PortafolioState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    )
);

export function portafolioReducer(state: PortafolioState | undefined, action: Action) {
    return _portafolioReducer(state, action);
}