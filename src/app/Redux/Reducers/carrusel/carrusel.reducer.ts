import { Action, createReducer, on } from '@ngrx/store';
import * as CarruselAction from '../../Actions/carrusel/carrusel.action';
import { CarruselState } from '../../StateInterface/CarruselState';

export const initialState: CarruselState = {
    data: [],
    loader: true
};

const _carruselReducer = createReducer(
    initialState,
    on(CarruselAction.setCarruselActionStart,
        (state: CarruselState) => {
            return {
                ...state,
                data: [],
                loader: true
            }
        }
    ),
    on(CarruselAction.setCarruselActionSuccess,
        (state: CarruselState, payload: CarruselState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    ),
    on(CarruselAction.setCarruselActionFail,
        (state: CarruselState, payload: CarruselState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    )
);

export function carruselReducer(state: CarruselState | undefined, action: Action) {
    return _carruselReducer(state, action);
}