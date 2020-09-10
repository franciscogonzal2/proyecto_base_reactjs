import { Action, createReducer, on } from '@ngrx/store';
import * as UserAction from '../../Actions/user/user.action';
import { UserState } from '../../StateInterface/UserState';

export const initialState: UserState = {
    data: [],
    loader: true
};

const _userReducer = createReducer(
    initialState,
    on(UserAction.setUserActionStart,
        (state: UserState) => {
            return {
                ...state,
                data: [],
                loader: true
            }
        }
    ),
    on(UserAction.setUserActionSuccess,
        (state: UserState, payload: UserState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    ),
    on(UserAction.setUserActionFail,
        (state: UserState, payload: UserState) => {
            return {
                ...state,
                data: payload.data,
                loader: payload.loader
            }
        }
    )
);

export function userReducer(state: UserState | undefined, action: Action) {
    return _userReducer(state, action);
}