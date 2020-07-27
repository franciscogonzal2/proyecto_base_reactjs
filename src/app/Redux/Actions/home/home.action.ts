import { createAction, props  } from '@ngrx/store';
import { HomeState } from '../../StateInterface/HomeState';

//Action (type, payload)

export const setHomeActionStart = createAction(
    '[home] SET_HOME_ACTION_START'
);

export const setHomeActionSuccess = createAction(
    '[home] SET_HOME_ACTION_SUCCESS',
    props< HomeState >()
);

export const setHomeActionFail = createAction(
    '[home] SET_HOME_ACTION_FAIL',
    props< HomeState >()
);
