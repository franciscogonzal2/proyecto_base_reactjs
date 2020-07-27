import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { OfertaService, ofertaDataInterface } from '../../../Services/oferta/oferta.service';
import * as OfertaAction from '../../Actions/oferta/oferta.action';

@Injectable()
export class OfertaEffects {

    constructor(
        private actions$: Actions,
        private _oferta: OfertaService
    ) { }

    public ofertaAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(OfertaAction.setOfertaActionStart),
            concatMap(() => this._oferta.getOfertaData().pipe(
                map((response: ofertaDataInterface[]) =>
                    OfertaAction.setOfertaActionSuccess({ data: response, loader: false })
                ),
                catchError((errors: ofertaDataInterface[]) =>
                    of(OfertaAction.setOfertaActionFail({ data: errors, loader: false }))
                )
            )
            )
        )
    );
}