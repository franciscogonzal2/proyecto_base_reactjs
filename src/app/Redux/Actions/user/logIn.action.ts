import { createAction, props  } from '@ngrx/store';
import { LogInState } from '../../StateInterface/UserState';

//Action (type, payload)

export const setLogInActionStart = createAction(
    '[LogIn] SET_LOGIN_ACTION_START'
);

export const setLogInActionSuccess = createAction(
    '[LogIn] SET_LOGIN_ACTION_SUCCESS',
    props< LogInState >()
);

export const setLogInActionFail = createAction(
    '[LogIn] SET_LOGIN_ACTION_FAIL',
    props< LogInState >()
);
