import { createAction, props  } from '@ngrx/store';
import { RegistroResponseState } from '../../StateInterface/UserState';

//Action (type, payload)

export const setRegistroResponseActionStart = createAction(
    '[RegistroResponse] SET_REGISTRO_RESPONSE_ACTION_START',
    props< RegistroResponseState >()
);

export const setRegistroResponseActionSuccess = createAction(
    '[RegistroResponse] SET_REGISTRO_RESPONSE_ACTION_SUCCESS',
    props< RegistroResponseState >()
);

export const setRegistroResponseActionFail = createAction(
    '[RegistroResponse] SET_REGISTRO_RESPONSE_ACTION_FAIL',
    props< RegistroResponseState >()
);
