import { createAction, props  } from '@ngrx/store';

interface AppState {
    language: string;
}

export const setLanguageAction = createAction(
    '[APP] SET_LANGUAGE',
    props<AppState>()
);
