import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { WebpacksService, webpacksDataInterface } from '../../../Services/webpacks/webpacks.service';
import * as WebPacksAction from '../../Actions/webpacks/webpacks.action';

@Injectable()
export class WebPacksEffects {

    constructor(
        private actions$: Actions,
        private _webPacks: WebpacksService
    ) { }

    public webPacksAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(WebPacksAction.setWebPacksActionStart),
            concatMap(() => this._webPacks.getWebPacksData().pipe(
                map((response: webpacksDataInterface[]) =>
                WebPacksAction.setWebPacksActionSuccess({ data: response, loader: false })
                ),
                catchError((errors: webpacksDataInterface[]) =>
                    of(WebPacksAction.setWebPacksActionFail({ data: errors, loader: false }))
                )
            )
            )
        )
    );
}