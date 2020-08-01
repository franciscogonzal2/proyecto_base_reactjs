import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { PortafolioService, portafolioDataInterface } from '../../../Services/portafolio/portafolio.service';
import * as PortafolioAction from '../../Actions/portafolio/portafolio.action';

@Injectable()
export class PortafolioEffects {

    constructor(
        private actions$: Actions,
        private _portafolio: PortafolioService
    ) { }

    public portafolioAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(PortafolioAction.setPortafolioActionStart),
            concatMap(() => this._portafolio.getPortafolioData().pipe(
                map((response: portafolioDataInterface[]) =>
                    PortafolioAction.setPortafolioActionSuccess({ data: response, loader: false })
                ),
                catchError((errors: portafolioDataInterface[]) =>
                    of(PortafolioAction.setPortafolioActionFail({ data: errors, loader: false }))
                )
            )
            )
        )
    );
}