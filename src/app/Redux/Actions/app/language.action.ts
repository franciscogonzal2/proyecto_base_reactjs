import { createAction, props  } from '@ngrx/store';
import * as StatesInterface from '../../globalStates.interface';

//Action (type, payload)

export const setLanguageAction = createAction(
    '[app] SET_LANGUAGE_ACTION',
    props< StatesInterface.LanguageState >()
);
