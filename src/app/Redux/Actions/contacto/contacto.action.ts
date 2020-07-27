import { createAction, props  } from '@ngrx/store';
import { ContactoState } from '../../StateInterface/ContactoState';

//Action (type, payload)

export const setContactoActionStart = createAction(
    '[contacto] SET_CONTACTO_ACTION_START'
);

export const setContactoActionSuccess = createAction(
    '[contacto] SET_CONTACTO_ACTION_SUCCESS',
    props< ContactoState >()
);

export const setContactoActionFail = createAction(
    '[contacto] SET_CONTACTO_ACTION_FAIL',
    props< ContactoState >()
);
