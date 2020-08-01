import { createAction, props  } from '@ngrx/store';
import { PortafolioState } from '../../StateInterface/PortafolioState';

//Action (type, payload)

export const setPortafolioActionStart = createAction(
    '[portafolio] SET_PORTAFOLIO_ACTION_START'
);

export const setPortafolioActionSuccess = createAction(
    '[portafolio] SET_PORTAFOLIO_ACTION_SUCCESS',
    props< PortafolioState >()
);

export const setPortafolioActionFail = createAction(
    '[portafolio] SET_PORTAFOLIO_ACTION_FAIL',
    props< PortafolioState >()
);
