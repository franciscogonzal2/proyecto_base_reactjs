import { createAction, props  } from '@ngrx/store';
import { FooterState } from '../../StateInterface/FooterState';

//Action (type, payload)

export const setFooterActionStart = createAction(
    '[footer] SET_FOOTER_ACTION_START'
);

export const setFooterActionSuccess = createAction(
    '[footer] SET_FOOTER_ACTION_SUCCESS',
    props< FooterState >()
);

export const setFooterActionFail = createAction(
    '[footer] SET_FOOTER_ACTION_FAIL',
    props< FooterState >()
);
