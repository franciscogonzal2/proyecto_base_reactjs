import { createAction, props  } from '@ngrx/store';
import { LanguageState } from '../../StateInterface/LanguageState';

//Action (type, payload)

export const setLanguageAction = createAction(
    '[app] SET_LANGUAGE_ACTION',
    props< LanguageState >()
);
