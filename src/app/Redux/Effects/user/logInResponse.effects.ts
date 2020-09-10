import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { LogInService, logInDataResponseInterface } from '../../../Services/logIn/logIn.service';
import * as LogInResponseAction from '../../Actions/user/logInResponse.action';

@Injectable()
export class LogInResponseEffects {

    constructor(
        private actions$: Actions,
        private _LogIn: LogInService
    ) { }

    public logInResponseAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(LogInResponseAction.setLogInResponseActionStart),
            concatMap((action) =>
                this._LogIn.logIn(action.response)
                    .pipe(
                        map((resp: logInDataResponseInterface[]) =>
                            LogInResponseAction.setLogInResponseActionSuccess({ response: resp })
                        ),
                        catchError((errors: logInDataResponseInterface[]) => 
                            of(LogInResponseAction.setLogInResponseActionFail({ response: errors }))
                        )
                    )
            )
        )
    );
}