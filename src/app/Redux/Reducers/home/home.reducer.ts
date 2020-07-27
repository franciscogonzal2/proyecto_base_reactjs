import { Action, createReducer, on } from '@ngrx/store';
import * as HomeAction from '../../Actions/home/home.action';
import { HomeState } from '../../StateInterface/HomeState';

export const initialState: HomeState = {
    data: [],
    loader: true
};

const _homeReducer = createReducer(
    initialState,
    on( HomeAction.setHomeActionStart, 
        ( state: HomeState ) => {
            return { 
                ...state,
                data: [], 
                loader: true
            }
        }
    ),
    on( HomeAction.setHomeActionSuccess, 
        ( state: HomeState, payload: HomeState ) => {
            return {
                ...state,
                data: payload.data, 
                loader: payload.loader 
            }
        }
    ),
    on( HomeAction.setHomeActionFail, 
        ( state: HomeState, payload: HomeState ) => {
            return { 
                ...state, 
                data: payload.data, 
                loader: payload.loader
            }
        }
    )
);

export function homeReducer(state: HomeState | undefined, action: Action) {
    return _homeReducer(state, action);
}