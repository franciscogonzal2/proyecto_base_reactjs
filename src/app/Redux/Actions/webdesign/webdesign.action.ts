import { createAction, props  } from '@ngrx/store';
import { WebDesignState } from '../../StateInterface/WebDesignState';

//Action (type, payload)

export const setWebDesignActionStart = createAction(
    '[webdesign] SET_WEB_DESIGN_ACTION_START'
);

export const setWebDesignActionSuccess = createAction(
    '[webdesign] SET_WEB_DESIGN_ACTION_SUCCESS',
    props< WebDesignState >()
);

export const setWebDesignActionFail = createAction(
    '[webdesign] SET_WEB_DESIGN_ACTION_FAIL',
    props< WebDesignState >()
);
