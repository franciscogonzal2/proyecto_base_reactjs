import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { RegistroService, newUserDataInterface } from '../../../Services/registro/registro.service';
import * as RegistroAction from '../../Actions/user/registro.action';

@Injectable()
export class RegistroEffects {

    constructor(
        private actions$: Actions,
        private _registro: RegistroService
    ) { }

    public registroAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(RegistroAction.setRegistroActionStart),
            concatMap(() => this._registro.getNewUserData().pipe(
                map((response: newUserDataInterface[]) =>
                    RegistroAction.setRegistroActionSuccess({ data: response, loader: false })
                ),
                catchError((errors: newUserDataInterface[]) =>
                    of(RegistroAction.setRegistroActionFail({ data: errors, loader: false }))
                )
            )
            )
        )
    );
}