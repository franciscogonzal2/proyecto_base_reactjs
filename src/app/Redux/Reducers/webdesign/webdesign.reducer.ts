import { Action, createReducer, on } from '@ngrx/store';
import * as WebDesignAction from '../../Actions/webdesign/webdesign.action';
import { WebDesignState } from '../../StateInterface/WebDesignState';

export const initialState: WebDesignState = {
    data: [],
    loader: true
};

const _webDesignReducer = createReducer(
    initialState,
    on(WebDesignAction.setWebDesignActionStart,
        (state: WebDesignState) => {
            return {
                ...state,
                data: [],
                loader: true
            }
        }
    ),
    on(WebDesignAction.setWebDesignActionSuccess,
        (state: WebDesignState, payload: WebDesignState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    ),
    on(WebDesignAction.setWebDesignActionFail,
        (state: WebDesignState, payload: WebDesignState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    )
);

export function webDesignReducer(state: WebDesignState | undefined, action: Action) {
    return _webDesignReducer(state, action);
}