import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { UserService, userDataInterface } from '../../../Services/user/user.service';
import * as UserAction from '../../Actions/user/user.action';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private _user: UserService
    ) { }

    public userAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(UserAction.setUserActionStart),
            concatMap(() => this._user.getUserData().pipe(
                map((response: userDataInterface[]) =>
                    UserAction.setUserActionSuccess({ data: response, loader: false })
                ),
                catchError((errors: userDataInterface[]) =>
                    of(UserAction.setUserActionFail({ data: errors, loader: false }))
                )
            )
            )
        )
    );
}