import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { HomeService, homeDataInterface } from '../../../Services/home/home.service';
import * as HomeAction from '../../Actions/home/home.action';

@Injectable()
export class HomeEffects {

    constructor(
        private actions$: Actions,
        private _home: HomeService
    ) {}

    public homeAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(HomeAction.setHomeActionStart),
            concatMap(() => this._home.getHomeData().pipe(
                    map( (response: homeDataInterface[]) =>
                        HomeAction.setHomeActionSuccess({ data: response, loader: false })
                    ),
                    catchError((errors: homeDataInterface[]) =>
                        of(HomeAction.setHomeActionFail({ data: errors, loader: false }))
                    )
                )
            )
        )
    );
}