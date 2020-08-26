import { createAction, props  } from '@ngrx/store';
import { WebPacksState } from '../../StateInterface/WebPacksState';

//Action (type, payload)

export const setWebPacksActionStart = createAction(
    '[webpacks] SET_WEBPACKS_ACTION_START'
);

export const setWebPacksActionSuccess = createAction(
    '[webpacks] SET_WEBPACKS_ACTION_SUCCESS',
    props< WebPacksState >()
);

export const setWebPacksActionFail = createAction(
    '[webpacks] SET_WEBPACKS_ACTION_FAIL',
    props< WebPacksState >()
);
