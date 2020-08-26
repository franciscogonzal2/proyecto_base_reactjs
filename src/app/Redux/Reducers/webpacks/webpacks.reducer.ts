import { Action, createReducer, on } from '@ngrx/store';
import * as WebPacksAction from '../../Actions/webpacks/webpacks.action';
import { WebPacksState } from '../../StateInterface/WebPacksState';

export const initialState: WebPacksState = {
    data: [],
    loader: true
};

const _webPacksReducer = createReducer(
    initialState,
    on(WebPacksAction.setWebPacksActionStart,
        (state: WebPacksState) => {
            return {
                ...state,
                data: [],
                loader: true
            }
        }
    ),
    on(WebPacksAction.setWebPacksActionSuccess,
        (state: WebPacksState, payload: WebPacksState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    ),
    on(WebPacksAction.setWebPacksActionFail,
        (state: WebPacksState, payload: WebPacksState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    )
);

export function webPacksReducer(state: WebPacksState | undefined, action: Action) {
    return _webPacksReducer(state, action);
}