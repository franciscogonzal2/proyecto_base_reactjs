import { createAction, props  } from '@ngrx/store';
import { NosotrosState } from '../../StateInterface/NosotrosState';

//Action (type, payload)

export const setNosotrosActionStart = createAction(
    '[nosotros] SET_NOSOTROS_ACTION_START'
);

export const setNosotrosActionSuccess = createAction(
    '[nosotros] SET_NOSOTROS_ACTION_SUCCESS',
    props< NosotrosState >()
);

export const setNosotrosActionFail = createAction(
    '[nosotros] SET_NOSOTROS_ACTION_FAIL',
    props< NosotrosState >()
);
