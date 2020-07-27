import { createAction, props  } from '@ngrx/store';
import { ContactoResponseState } from '../../StateInterface/ContactoState';

//Action (type, payload)

export const setContactoResponseActionStart = createAction(
    '[contacto] SET_CONTACTO_RESPONSE_ACTION_START',
    props< ContactoResponseState >()
);

export const setContactoResponseActionSuccess = createAction(
    '[contacto] SET_CONTACTO_RESPONSE_ACTION_SUCCESS',
    props< ContactoResponseState >()
);

export const setContactoResponseActionFail = createAction(
    '[contacto] SET_CONTACTO_RESPONSE_ACTION_FAIL',
    props< ContactoResponseState >()
);