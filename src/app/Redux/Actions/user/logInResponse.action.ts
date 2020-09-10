import { createAction, props  } from '@ngrx/store';
import { LogInResponseState } from '../../StateInterface/UserState';

//Action (type, payload)

export const setLogInResponseActionStart = createAction(
    '[LogInResponse] SET_LOGIN_RESPONSE_ACTION_START',
    props< LogInResponseState >()
);

export const setLogInResponseActionSuccess = createAction(
    '[LogInResponse] SET_LOGIN_RESPONSE_ACTION_SUCCESS',
    props< LogInResponseState >()
);

export const setLogInResponseActionFail = createAction(
    '[LogInResponse] SET_LOGIN_RESPONSE_ACTION_FAIL',
    props< LogInResponseState >()
);
