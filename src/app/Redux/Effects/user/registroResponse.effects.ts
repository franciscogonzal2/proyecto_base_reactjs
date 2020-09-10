import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { RegistroService, newUserDataResponseInterface } from '../../../Services/registro/registro.service';
import * as RegistroResponseAction from '../../Actions/user/registroResponse.action';

@Injectable()
export class RegistroResponseEffects {

    constructor(
        private actions$: Actions,
        private _registro: RegistroService
    ) { }

    public registroResponseAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(RegistroResponseAction.setRegistroResponseActionStart),
            concatMap((action) =>
                this._registro.createNewUser(action.response)
                    .pipe(
                        map((resp: newUserDataResponseInterface[]) =>
                            RegistroResponseAction.setRegistroResponseActionSuccess({ response: resp })
                        ),
                        catchError((errors: newUserDataResponseInterface[]) => 
                            of(RegistroResponseAction.setRegistroResponseActionFail({ response: errors }))
                        )
                    )
            )
        )
    );
}