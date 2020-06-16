import { createAction, props  } from '@ngrx/store';
import * as StatesInterface from '../../globalStates.interface';

//Action (type, payload)

export const setHomeActionStart = createAction(
    '[home] SET_HOME_ACTION_START'
);

export const setHomeActionSuccess = createAction(
    '[home] SET_HOME_ACTION_SUCCESS',
    props< StatesInterface.HomeState >()
);

export const setHomeActionFail = createAction(
    '[home] SET_HOME_ACTION_FAIL',
    props< StatesInterface.HomeState >()
);
