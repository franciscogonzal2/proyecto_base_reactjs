import { Action, createReducer, on } from '@ngrx/store';
import * as NosotrosAction from '../../Actions/nosotros/nosotros.action';
import { NosotrosState } from '../../StateInterface/NosotrosState';

export const initialState: NosotrosState = {
    data: [],
    loader: true
};

const _nosotrosReducer = createReducer(
    initialState,
    on(NosotrosAction.setNosotrosActionStart,
        (state: NosotrosState) => {
            return {
                ...state,
                data: [],
                loader: true
            }
        }
    ),
    on(NosotrosAction.setNosotrosActionSuccess,
        (state: NosotrosState, payload: NosotrosState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    ),
    on(NosotrosAction.setNosotrosActionFail,
        (state: NosotrosState, payload: NosotrosState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    )
);

export function nosotrosReducer(state: NosotrosState | undefined, action: Action) {
    return _nosotrosReducer(state, action);
}