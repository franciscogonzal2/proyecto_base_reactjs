import { createAction, props  } from '@ngrx/store';
import { OfertaState } from '../../StateInterface/OfertaState';

//Action (type, payload)

export const setOfertaActionStart = createAction(
    '[oferta] SET_OFERTA_ACTION_START'
);

export const setOfertaActionSuccess = createAction(
    '[oferta] SET_OFERTA_ACTION_SUCCESS',
    props< OfertaState >()
);

export const setOfertaActionFail = createAction(
    '[oferta] SET_OFERTA_ACTION_FAIL',
    props< OfertaState >()
);
