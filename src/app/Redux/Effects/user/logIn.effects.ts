import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { LogInService, logInDataInterface } from '../../../Services/logIn/logIn.service';
import * as LogInAction from '../../Actions/user/logIn.action';

@Injectable()
export class LogInEffects {

    constructor(
        private actions$: Actions,
        private _logIn: LogInService
    ) { }

    public logInAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(LogInAction.setLogInActionStart),
            concatMap(() => this._logIn.getLogInData().pipe(
                map((response: logInDataInterface[]) =>
                    LogInAction.setLogInActionSuccess({ data: response, loader: false })
                ),
                catchError((errors: logInDataInterface[]) =>
                    of(LogInAction.setLogInActionFail({ data: errors, loader: false }))
                )
            )
            )
        )
    );
}