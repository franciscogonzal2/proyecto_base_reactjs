import { createAction, props  } from '@ngrx/store';
import { CarruselState } from '../../StateInterface/CarruselState';

//Action (type, payload)

export const setCarruselActionStart = createAction(
    '[carrusel] SET_CARRUSEL_ACTION_START'
);

export const setCarruselActionSuccess = createAction(
    '[carrusel] SET_CARRUSEL_ACTION_SUCCESS',
    props< CarruselState >()
);

export const setCarruselActionFail = createAction(
    '[carrusel] SET_CARRUSEL_ACTION_FAIL',
    props< CarruselState >()
);
