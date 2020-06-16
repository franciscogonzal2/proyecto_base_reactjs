import { Action, createReducer, on } from '@ngrx/store';
import * as HomeAction from '../../Actions/home/home.action';
import * as StatesInterface from '../../globalStates.interface';

export const initialState: StatesInterface.HomeState = {
    data: []
};

export const HomeStateSelectorKey = 'HomeStateSelector';

const _homeReducer = createReducer(
    initialState,
    on( HomeAction.setHomeActionStart, 
        ( state: StatesInterface.HomeState ) => {
            return { ...state }
        }
    ),
    on( HomeAction.setHomeActionSuccess, 
        ( state: StatesInterface.HomeState, payload: StatesInterface.HomeState ) => {
            return { ...state, data: payload.data  }
        }
    ),
    on( HomeAction.setHomeActionFail, 
        ( state: StatesInterface.HomeState, payload: StatesInterface.HomeState ) => {
            return { ...state, data: payload.data  }
        }
    )
);

export function homeReducer(state: StatesInterface.HomeState | undefined, action: Action) {
    return _homeReducer(state, action);
}