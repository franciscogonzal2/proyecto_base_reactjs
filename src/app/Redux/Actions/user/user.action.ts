import { createAction, props  } from '@ngrx/store';
import { UserState } from '../../StateInterface/UserState';

//Action (type, payload)

export const setUserActionStart = createAction(
    '[User] SET_USER_ACTION_START'
);

export const setUserActionSuccess = createAction(
    '[User] SET_USER_ACTION_SUCCESS',
    props< UserState >()
);

export const setUserActionFail = createAction(
    '[User] SET_USER_ACTION_FAIL',
    props< UserState >()
);
