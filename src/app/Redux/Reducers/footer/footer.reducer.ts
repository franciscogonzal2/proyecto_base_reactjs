import { Action, createReducer, on } from '@ngrx/store';
import * as FooterAction from '../../Actions/footer/footer.action';
import { FooterState } from '../../StateInterface/FooterState';

export const initialState: FooterState = {
    data: [],
    loader: true
};

const _footerReducer = createReducer(
    initialState,
    on(FooterAction.setFooterActionStart,
        (state: FooterState) => {
            return {
                ...state,
                data: [],
                loader: true
            }
        }
    ),
    on(FooterAction.setFooterActionSuccess,
        (state: FooterState, payload: FooterState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    ),
    on(FooterAction.setFooterActionFail,
        (state: FooterState, payload: FooterState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    )
);

export function footerReducer(state: FooterState | undefined, action: Action) {
    return _footerReducer(state, action);
}