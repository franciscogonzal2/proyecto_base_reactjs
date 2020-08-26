import { Action, createReducer, on } from '@ngrx/store';
import * as ResponsiveAction from '../../Actions/responsive/responsive.action';
import { ResponsiveState } from '../../StateInterface/ResponsiveState';

export const initialState: ResponsiveState= {
    data: [],
    loader: true
};

const _responsiveReducer = createReducer(
    initialState,
    on(ResponsiveAction.setResponsiveActionStart,
        (state: ResponsiveState) => {
            return {
                ...state,
                data: [],
                loader: true
            }
        }
    ),
    on(ResponsiveAction.setResponsiveActionSuccess,
        (state: ResponsiveState, payload: ResponsiveState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    ),
    on(ResponsiveAction.setResponsiveActionFail,
        (state: ResponsiveState, payload: ResponsiveState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    )
);

export function responsiveReducer(state: ResponsiveState | undefined, action: Action) {
    return _responsiveReducer(state, action);
}