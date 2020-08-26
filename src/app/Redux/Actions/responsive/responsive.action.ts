import { createAction, props  } from '@ngrx/store';
import { ResponsiveState } from '../../StateInterface/ResponsiveState';

//Action (type, payload)

export const setResponsiveActionStart = createAction(
    '[responsive] SET_RESPONSIVE_ACTION_START'
);

export const setResponsiveActionSuccess = createAction(
    '[responsive] SET_RESPONSIVE_ACTION_SUCCESS',
    props< ResponsiveState >()
);

export const setResponsiveActionFail = createAction(
    '[responsive] SET_RESPONSIVE_ACTION_FAIL',
    props< ResponsiveState >()
);
