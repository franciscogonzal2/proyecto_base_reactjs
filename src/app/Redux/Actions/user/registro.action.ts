import { createAction, props  } from '@ngrx/store';
import { RegistroState } from '../../StateInterface/UserState';

//Action (type, payload)

export const setRegistroActionStart = createAction(
    '[Registro] SET_REGISTRO_ACTION_START'
);

export const setRegistroActionSuccess = createAction(
    '[Registro] SET_REGISTRO_ACTION_SUCCESS',
    props< RegistroState >()
);

export const setRegistroActionFail = createAction(
    '[Registro] SET_REGISTRO_ACTION_FAIL',
    props< RegistroState >()
);
